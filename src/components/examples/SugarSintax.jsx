//SPREAD OPERATORS

//ANTES

const numeros =[1,2,3]
const nuevoArrayDeNumeros = numeros.concat([4,5,6])
console.log(nuevoArrayDeNumeros)

//AHORA
const nuevoSugarNumeros = [...numeros, 4,5,6,7,8,9]

//DESTRUCTURING

//ANTES
const colores= ['rojo','verde','negro']
const primero= colores[0]
const segundo= colores[1]

//AHORA
const [primerColor, segundoColor] = colores

//OBJETOS

const persona= {
    nombre: 'pepe',
    edad:38,
    ciudad: 'san juan',
}
const [nombre, edad, ciudad]= persona

//CONDICION

//ANTES
let mensaje;

if (edad >=18){
    mensaje= 'sos mayor'
}else{
    mensaje= 'sos menor'
}

//AHORA
const mensajeSugar = edad >=18 ? 'sos mayor' : 'sos menor'

//FUNCIONES

//ANTES
function sumar(a,b){
    return a+b
}
const sumarArrow = (a,b) =>{
    return a+b
}

//AHORA
const sumarArrowSugar = (a,b) => a+b