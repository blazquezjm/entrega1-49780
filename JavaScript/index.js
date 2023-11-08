let continuar;

do{
const COTDOL = 1000;
const COTEURO = 1100;
const COTYEN = 900;
const COTREAL = 700;
const COTPESO = 1;

let divisa1 = prompt("ingrese la divisa original: USD / EURO / YEN / REAL / PESO").toLowerCase();
let divisa2 = prompt("ingrese la divisa a la que desea convertir: USD / EURO /  YEN / REAL / PESO").toLowerCase();

let plata1 = parseFloat(prompt("ingrese la cantidad a convertir: "));
let resultado;

// COMIENZAN FUNCIONES DE CONVERSION DE PESO A ALGO

function pesoAusd(){
    resultado = plata1 / COTDOL;
    alert(plata1 + " pesos son " + resultado + " DOL");
    
}
function pesoAeuro(){
    resultado = plata1 / COTEURO;
    alert(plata1 + " pesos son " + resultado + " EUROS");
    
}
function pesoAyen(){
    resultado = plata1 / COTYEN;
    alert(plata1 + " pesos son " + resultado + " YENES");
    
}
function pesoAreal(){
    resultado = plata1 / COTREAL;
    alert(plata1 + " pesos son " + resultado + " REALES");
    
}
// COMIENZAN FUNCIONES DE CONVERSION DE DOLAR A ALGO

function usdApeso(){
    resultado = plata1 * COTDOL;
    alert (plata1 + " dolares son " + resultado + " Pesos");
}
function usdAeuro(){
    resultado = plata1 * COTDOL / COTEURO;
    alert (plata1 + " dolares son " + resultado + " Euros");
}
function usdAyen(){
    resultado = plata1 * COTDOL / COTYEN;
    alert (plata1 + " dolares son " + resultado + " Yenes");
}
function usdAreal(){
    resultado = plata1 * COTDOL / COTREAL;
    alert (plata1 + " dolares son " + resultado + " Reales");
}

// COMIENZAN FUNCIONES DE CONVERSION DE EURO A ALGO

function euroApeso(){
    resultado = plata1 * COTEURO;
    alert (plata1 + " euros son " + resultado + " Pesos");
}
function euroAusd(){
    resultado = plata1 * COTEURO / COTDOL;
    alert (plata1 + " euros son " + resultado + " Dolares");
}
function euroAyen(){
    resultado = plata1 * COTEURO / COTYEN;
    alert (plata1 + " euros son " + resultado + " Yenes");
}
function euroAreal(){
    resultado = plata1 * COTEURO / COTREAL;
    alert (plata1 + " euros son " + resultado + " Reales");
}

// COMIENZAN FUNCIONES DE CONVERSION DE YEN A ALGO

function yenApeso(){
    resultado = plata1 * COTYEN;
    alert (plata1 + " yenes son " + resultado + " Pesos");
}
function yenAusd(){
    resultado = plata1 * COTYEN / COTDOL;
    alert (plata1 + " yenes son " + resultado + " Dolares");
}
function yenAeuro(){
    resultado = plata1 * COTYEN / COTEURO;
    alert (plata1 + " yenes son " + resultado + " Euros");
}
function yenAreal(){
    resultado = plata1 * COTYEN / COTREAL;
    alert (plata1 + " yenes son " + resultado + " Reales");
}

// COMIENZAN FUNCIONES DE CONVERSION DE REAL A ALGO

function realApeso(){
    resultado = plata1 * COTREAL;
    alert (plata1 + " reales son " + resultado + " Pesos");
}
function realAusd(){
    resultado = plata1 * COTREAL / COTDOL;
    alert (plata1 + " reales son " + resultado + " Dolares");
}
function realAeuro(){
    resultado = plata1 * COTREAL / COTEURO;
    alert (plata1 + " reales son " + resultado + " Euros");
}
function realAyen(){
    resultado = plata1 * COTREAL / COTYEN;
    alert (plata1 + " reales son " + resultado + " Yenes");
}

//COMIENZAN CONDICIONALES DE CONVERSION DE PESO A ALGO

if (divisa1 === "peso" && divisa2 === "usd"){
    pesoAusd();

}else if (divisa1 === "peso" && divisa2 === "euro"){
    pesoAeuro();

}else if (divisa1 === "peso" && divisa2 === "yen"){
    pesoAyen();

}else if (divisa1 === "peso" && divisa2 === "real"){
    pesoAreal();

//COMIENZAN CONDICIONALES DE USD A ALGO

}else if (divisa1 === "usd" && divisa2 === "peso"){
    usdApeso();

}else if (divisa1 === "usd" && divisa2 === "euro"){
    usdAeuro();
    
}else if (divisa1 === "usd" && divisa2 === "yen"){
    usdAyen();
    
}
else if (divisa1 === "usd" && divisa2 === "real"){
    usdAreal();
    
}

//COMIENZAN CONDICIONALES DE EURO A ALGO

else if (divisa1 === "euro" && divisa2 === "peso"){
    euroApeso();

}else if (divisa1 === "euro" && divisa2 === "usd"){
    euroAusd();
    
}else if (divisa1 === "euro" && divisa2 === "yen"){
    euroAyen();
    
}
else if (divisa1 === "euro" && divisa2 === "real"){
    euroAreal();
    
}

//COMIENZAN CONDICIONALES DE YEN A ALGO

else if (divisa1 === "yen" && divisa2 === "peso"){
    yenApeso();

}else if (divisa1 === "yen" && divisa2 === "usd"){
    yenAusd();
    
}else if (divisa1 === "yen" && divisa2 === "euro"){
    yenAeuro();
    
}
else if (divisa1 === "yen" && divisa2 === "real"){
    yenAreal();
    
}

//COMIENZAN CONDICIONALES DE REAL A ALGO

else if (divisa1 === "real" && divisa2 === "peso"){
    realApeso();

}else if (divisa1 === "real" && divisa2 === "usd"){
    realAusd();
    
}else if (divisa1 === "real" && divisa2 === "euro"){
    realAeuro();
    
}
else if (divisa1 === "real" && divisa2 === "yen"){
    realAyen();
    
}else {
    alert ("ha ingresado un valor erroneo")
}

continuar = prompt ("desea seguir convirtiendo moneda? Si/No");
}while (continuar === "si")

