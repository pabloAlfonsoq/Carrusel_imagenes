//array de rutas de imagenes

var lista_imagen = new Array('/img/counter.jpg', '/img/halflife.jpg', '/img/residentevil.jpg');
var galeria = document.getElementById('album');
var indice = 0;

function temporizador(){
    setInterval(cambiar_imagen, 2000);
}

function cambiar_imagen() {
    indice++;
    if(indice >= lista_imagen.length){
        indice = 0;
    }
    galeria.src = lista_imagen[indice];
    
}