const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src = './imagem/ligada.png';
}

function lampOff () {
    lamp.src = './imagem/desligado.png';
}
function lampBroken (){
    lamp.src = './imagem/quebrado.png';
}



turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener ('click', lampOff );
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff );
lamp.addEventListener ('dblclick', lampBroken);
