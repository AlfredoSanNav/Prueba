var inpNum1 = document.querySelector('#numero1')
var inpNum2 =document.querySelector('#numero2')
var inpRes = document.querySelector ('#resultado')
var btnSumar = document.querySelector('#btnSumar')
var btnRestar = document.querySelector('#btnRestar')
var btnMultiplicar = document.querySelector('#btnMultiplicar')
var btnDividir = document.querySelector('#btnDividir')
var btnBorrar = document.querySelector('#btnBorrar')
var btnProbar = document.querySelector('#btnProbar')
console.log (inpNum2)
console.log (inpNum1)



btnSumar.addEventListener('click', () =>{
    let num = inpNum1.value
    let num2 = inpNum2.value
    inpRes.value = Number(num) + Number(num2);
} )




btnSumar.addEventListener('click', () =>{
    alert('Hola!')
} )
 btnRestar.addEventListener('click', () => {
     let num = inpNum1.value;
     let num2 = inpNum2.value;
     inpRes.value = Number(num) - Number(num2);
 })

 btnMultiplicar.addEventListener('click', () => {
    let num = inpNum1.value;
    let num2 = inpNum2.value;
    inpRes.value = Number(num) * Number(num2);
 })


 btnDividir.addEventListener('click', () => {
    let num = inpNum1.value;
    let num2 = inpNum2.value;
    inpRes.value = Number(num) / Number(num2);
 })



 btnBorrar.addEventListener('click', () => {
    inpNum1.value = '';
    inpNum2.value ='' ;
    inpRes.value = '' ;
 })

 btnProbar.addEventListener('click', () => {
let edad = Number(inpNum1.value)
if (edad>18) {
    inpRes.value= 'Bienvenido';
}else if (edad > 14){
    inpRes.value='Todavía no puedes entrar aquí niño'

}else if ( edad>10 ){
    inpRes.value = 'Este no es un lugar para ti, niño'
}
else{
    inpRes.value = 'Vete a la chosa de los pequeñines'
}
 })
