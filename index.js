var milisegundos = 0
var segundos = 0
var minutos = 0
var hora = 0
var intervalo
//Funções para o botão iniciar, pausar e parar.
{
function iniciar() {
    intervalo = setInterval(contador, 10.5)
  
}
function Pausar() {
    clearInterval(intervalo)
    
}
function Parar() {
    clearInterval(intervalo)
    milisegundos = 0
    segundos = 0
    minutos = 0
    hora = 0
    document.getElementById("contador").innerText = ("00:00:00,00") 
    
}
}

//Função de contador do cronômetro.
function contador() {
    milisegundos ++
    if (milisegundos === 100){
        segundos ++
        milisegundos = 0
    } 
    if (segundos === 60){
        minutos ++
        segundos = 0
    }
    if (minutos === 60){
        hora ++
        minutos = 0
    }
    
    document.getElementById("contador").innerText = doisDigitos(hora) + ":" + doisDigitos(minutos) + ":" + doisDigitos(segundos) + "," + doisDigitos(milisegundos)
}

//Função para se o valor for menor que 10, ficar com o 0 antes do número
//EX: 01:00:00,  11:00:00 correto // errado 01:00:00 / 011:00:00
/**
 * 
 * @param {number} number var = milisegundos, segundos, minutos, hora.
 * @returns 10:01, ao invés de 010:01.
 */
function doisDigitos(digito) {
    if (digito < 10){
        return ("0" + digito)
        
    } return (digito)
}



