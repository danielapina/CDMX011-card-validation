import validator from './validator.js';

//console.log(validator);
// este achivo nos serviá para manipular todo el HTML

console.log("hola");




document.getElementById("btnValidate").addEventListener("click",(event)=>{
    event.preventDefault();

    let creditCardNumber= document.getElementById("myBtn").value;
    console.log(creditCardNumber);
    let validarNumero=(validator.isValid(creditCardNumber));
    console.log(validarNumero);
    if(validarNumero == true){
        console.log("Su tarjeta es valida");
    }
    
    
    
});



 