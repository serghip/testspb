var num = 2;
function addElemento() {
  if (num == 3) {
    var involucrado3 = document.getElementById('involucrado3');
    involucrado3.style.opacity = '1';
    involucrado3.style.visibility = 'visible';
    involucrado3.style.height = 'auto';
    var botonRemover = document.getElementById('Remover');
    involucrado3.appendChild(botonRemover);
    num = 4;
  }
  if (num == 2) {
    var involucrado2 = document.getElementById('involucrado2');
    involucrado2.style.opacity = '1';
    involucrado2.style.visibility = 'visible';
    involucrado2.style.height = 'auto';
    num = 3;
  }
}
function removeElemento() {
  if (num == 3) {
    involucrado2.style.opacity = '0';
    involucrado2.style.visibility = 'hidden';
    involucrado2.style.height = '0px';
    num = 2;
  }
  if (num == 4) {
    involucrado3.style.opacity = '0';
    involucrado3.style.visibility = 'hidden';
    involucrado3.style.height = '0px';
    var botonRemover = document.getElementById('Remover');
    involucrado2.appendChild(botonRemover);
    num = 3;
  }
}

