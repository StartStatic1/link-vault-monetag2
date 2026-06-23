// Captura o parâmetro 'd' da URL ou recupera do sessionStorage
const params = new URLSearchParams(window.location.search);
let d = params.get('d') || sessionStorage.getItem('link_vip');

if (d) {
    sessionStorage.setItem('link_vip', d);
} else {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:100px;'>Link Inválido</h2>";
}

const btn = document.getElementById("main-btn");
const fill = document.getElementById("fill");
const statusTxt = document.getElementById("status-txt");

// Função para rolar a tela suavemente até o botão
function focarNoBotao(elemento) {
    setTimeout(() => {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
}

// ETAPA 1: Primeiro clique e Adsterra
btn.onclick = function() {
    // Abre seu Direct Link Adsterra
    window.open("https://encouragingjawsordinarily.com/w3wbwkzk9?key=9f27a177c445f12758a69d7273fe6f04", "_blank");
    
    this.disabled = true;
    this.innerText = "AGUARDE...";
    fill.style.width = "50%";
    statusTxt.innerText = "Validando Etapa 1...";

    setTimeout(() => {
        document.getElementById("pos-2").appendChild(this);
        this.innerText = "CONTINUAR";
        this.disabled = false;
        focarNoBotao(this);
        this.onclick = etapaFinal;
    }, 3000);
};

// ETAPA FINAL: Segundo clique e Redirecionamento para a SAFE
function etapaFinal() {
    window.open("https://encouragingjawsordinarily.com/w3wbwkzk9?key=9f27a177c445f12758a69d7273fe6f04", "_blank");
    
    this.disabled = true;
    fill.style.width = "100%";
    statusTxt.innerText = "Acesso Liberado!";

    setTimeout(() => {
        // Move o botão para a área final
        document.getElementById("pos-3").appendChild(this);
        this.innerText = "ACESSAR AGORA";
        this.style.background = "#22c55e"; 
        this.disabled = false;
        focarNoBotao(this);
        
        // AQUI A MÁGICA ACONTECE:
        // Agora usando caminho relativo. Funciona em qualquer domínio!
        this.onclick = () => {
            const linkBase64 = sessionStorage.getItem('link_vip');
            const safeUrl = "/safe/index.html?d=" + linkBase64;
            window.location.replace(safeUrl);
        };
    }, 2500);
}
