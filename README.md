# VIP-ADS-EASY — Passador

## Estrutura
```
/site/index.html   → Passador principal (3 etapas + adblock)
/safe/index.html   → Página final com countdown (20s)
/painel/index.html → Painel gerador de links (histórico local)
vercel.json        → Config de rotas Vercel
```

## URL Base
https://vip-ads-easy.vercel.app

## Como usar
1. Acesse `/painel/` para gerar links
2. Cole o link do Telegram/Drive/etc
3. Escolha o tipo: Passador 3 Etapas ou Safe Direto
4. Copie e compartilhe

## Links gerados
- Passador: `https://vip-ads-easy.vercel.app/site/index.html?d=BASE64`
- Safe: `https://vip-ads-easy.vercel.app/safe/index.html?d=BASE64`

## Deploy
Conecte este repositório ao Vercel. O `vercel.json` cuida das rotas.
