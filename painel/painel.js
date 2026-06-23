function gerarLink() {
    const url = document.getElementById('urlInput').value;
    if(!url) return alert("Insira um link!");
    const encoded = btoa(url); 
    const baseUrl = window.location.origin + "/site/index.html";
    const finalLink = `${baseUrl}?d=${encoded}`;
    document.getElementById('resultBox').style.display = "block";
    document.getElementById('outputLink').value = finalLink;
}
function copiar() {
    const copyText = document.getElementById("outputLink");
    copyText.select();
    document.execCommand("copy");
    alert("Copiado com sucesso!");
}
