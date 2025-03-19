
document.addEventListener(DOMContentLoaded, function () {
    const aumentaFonteBotao = document.getElementById(aumentar - fonte);
    const diminuirFonteBotao = document.getElementById(diminuir - fonte);
    let tamanhoAtualFonte = 2;
    aumentaFonteBotao.addEventListener(click, function () {
        tamanhoAtualFonte += 0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    },
        diminuirFonteBotao.addEventListener(click, function () {
            tamanhoAtualFonte -= 0.2;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }));
});
