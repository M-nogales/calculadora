"use strict"

/*let campoNumero1 =document.getElementById("numero1");
let campoNumero2 =document.getElementById("numero2");

let btncero =document.getElementById("cero");
let btnuno =document.getElementById("uno");
let btndos =document.getElementById("dos");
let btntres =document.getElementById("tres");
let btncuatro =document.getElementById("cuatro");
let btncinco =document.getElementById("cinco");
let btnseis =document.getElementById("seis");
let btnsiete =document.getElementById("siete");
let btnocho =document.getElementById("ocho");
let btnnueve =document.getElementById("nueve");

let suma =document.getElementById("suma");
let resta =document.getElementById("resta");
let multipli =document.getElementById("multi");
let divi =document.getElementById("divi");
let result =document.getElementById("result");

suma= campoNumero1 + campoNumero2;
resta= campoNumero1 - campoNumero2;
multipli=campoNumero1 * campoNumero2;
divi= campoNumero1 / campoNumero2;

alert(result);*/

const pantalla = document.getElementById('window');// si la constante la llamo window se bugea

//añade todos los botones que toques al window

function addTowindow(value) {
    pantalla.value += value;
}
//limpia el window cambiando lo de dentro por ''
function clearwindow() {
    pantalla.value = '';
}
//asigna a resultado el valor del calculo de lo que haya en window
function calculate() {
    try {
        const result = eval(pantalla.value);
        pantalla.value = result;
    } catch (error) {
        pantalla.value = 'Error';
    }
}

// Asignar manejadores de eventos a los botones
// se puede hacer con onclick en html pero raro
document.getElementById('siete').addEventListener('click', () => addTowindow('7'));
document.getElementById('ocho').addEventListener('click', () => addTowindow('8'));
document.getElementById('nueve').addEventListener('click', () => addTowindow('9'));
document.getElementById('suma').addEventListener('click', () => addTowindow('+'));
document.getElementById('cuatro').addEventListener('click', () => addTowindow('4'));
document.getElementById('cinco').addEventListener('click', () => addTowindow('5'));
document.getElementById('seis').addEventListener('click', () => addTowindow('6'));
document.getElementById('resta').addEventListener('click', () => addTowindow('-'));
document.getElementById('uno').addEventListener('click', () => addTowindow('1'));
document.getElementById('dos').addEventListener('click', () => addTowindow('2'));
document.getElementById('tres').addEventListener('click', () => addTowindow('3'));
document.getElementById('multi').addEventListener('click', () => addTowindow('*'));
document.getElementById('cero').addEventListener('click', () => addTowindow('0'));
document.getElementById('limpiar').addEventListener('click', clearwindow);
document.getElementById('divi').addEventListener('click', () => addTowindow('/'));
document.getElementById('result').addEventListener('click', calculate);