var pagina = 1;
var carregando = false;

function carregarImagens() {
  if (carregando) {
    return;
  }
  carregando = true;
  var url = "data.json";
  var ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var images = JSON.parse(ajax.responseText);
      var divImagens = document.getElementById("images");
      for (const image of images.images) {
          var img = document.createElement("img");
          img.src = image.imagemUrl;
          divImagens.appendChild(img);
      }
      carregando = false;
      pagina++;
  }
  };
  ajax.send();
}

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    carregarImagens();
  }
};