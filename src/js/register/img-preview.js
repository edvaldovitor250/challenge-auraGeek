const inputImagem = document.getElementById("imagem");
const imagemPreview = document.getElementById("imagem-preview");
const imgName = document.getElementById("img-name");

inputImagem.addEventListener('input', function () {
  imagemPreview.src = this.value;
})