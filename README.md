# VIP Ads Monetag — Integração Completa

**Status**: ✅ Integrado com Monetag + Anti-AdBlock Profissional
**Deploy Base**: `https://startstatic-vip.zeabur.app`

---

## 📂 Estrutura Final

```
/site/index.html   → Passador principal (3 etapas + Monetag + Anti-AdBlock)
/safe/index.html   → Página final com countdown (20s + Monetag + Anti-AdBlock)
/painel/index.html → Painel gerador de links (URL base atualizada)
sw.js              → Service Worker (mantido como está)
```

---

## 🎯 Monetag Integrado

### 1. MultiTag (data-zone="252888")
- **site/index.html**: No `<head>` + slots `#ad-main` e `#ad-bottom`
- **safe/index.html**: No `<head>` + slots `#ad-safe-top`, `#ad-safe-mid`, `#ad-safe-bottom`
- **painel/index.html**: Não integrado (painel não precisa de ads)

### 2. OnClick (zone 11192283)
- **site/index.html**: No `<head>` — dispara no clique da Etapa 1
- **safe/index.html**: No `<head>` — dispara no load da página

### 3. Vignette (zone 11192284)
- **site/index.html**: No `<head>` — dispara no clique da Etapa 2

### 4. Direct Link (https://omg10.com/4/11192285)
- **site/index.html**: Botão final "🚀 ACESSAR AGORA" → redireciona via Direct Link antes de ir para safe
- **safe/index.html**: Botão "⬇️ BAIXAR AGORA" → redireciona via Direct Link antes do destino final

---

## 🛡️ Anti-AdBlock Profissional (7 Métodos)

Implementado em **site** e **safe**:

1. **Bait Elements**: Verifica se slots de ad foram escondidos
2. **Script Injection Test**: Tenta carregar script do Google Ads
3. **Fetch Test**: Testa requisição para domínio de ad
4. **CSS Bait**: Elemento `.adsbox` invisível detecta bloqueio
5. **Service Worker**: Verifica se SW está ativo
6. **Monetag Script Check**: Verifica se scripts Monetag carregaram
7. **Múltiplas verificações**: Checagens nos segundos 3, 7, 12 (site) e 4, 8, 16, 10, 4 (safe)

**Overlay**: Tela fullscreen bloqueia acesso quando AdBlock detectado (2 strikes)

---

## 🔄 Mudança de URL Base

```
ANTES: https://vip-ads-easy.vercel.app/
DEPOIS: https://startstatic-vip.zeabur.app/
```

Aplicado em:
- `site/index.html` (const BASE_URL)
- `painel/index.html` (const BASE + logo-sub)

---

## 🚀 Deploy

1. Substitua os arquivos no repositório GitHub
2. Push para branch main
3. Zeabur faz deploy automático
4. Teste em: `https://startstatic-vip.zeabur.app/site/index.html?d=BASE64`

---

## ⚠️ Notas Importantes

- A lógica de geração de links (base64, parâmetro `d`) permanece **inalterada**
- O painel mantém histórico local no `localStorage`
- O sw.js permanece igual (já está integrado com o domínio 3nbf4.com)
- Teste em Brave e Opera para validar o anti-adblock
