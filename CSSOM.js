/* 
El CSSOM (CSS Object Model) es una API que permite acceder y manipular dinámicamente las reglas y propiedades CSS 
de un documento.  permite comunicar css con javascript para poder manipular el css

Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite a diferentes aplicaciones 
o componentes de softwarecomunicarse entre sí.
*/

const barra = document.querySelector('#rango')
const titulo = document.querySelector('.titulo')
function CambiarTamaño(e) {
    titulo.style.fontSize = e.target.value + 'px'; //lo de los px es xq el valor es solo un número y tenemos que aádirle el tamaño (px)
}

addEventListener('change', CambiarTamaño)
//Le estamos diciendo que cada vez qeu haya un evento de tipo change(que deje de hacer foco o cambie la barra)
// el valor del tamaño de fuente sea igual al valor del target es decir, (la barra tiene un minimo de 16 y un amx de 100
//el tamamaño será igual al valor que elijamos arrastranado la barra )


function CambiarColor(e) {
    const cambio = e.target.value; //aqui noo hace falta poner la medida ni añadir #xq el valor directamente nos devulve un color en #53535
    titulo.style.color = cambio;   //Es decir el formato habitual de un color
}

addEventListener('change', CambiarColor);