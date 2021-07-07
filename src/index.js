import validator from './validator.js';

console.log(validator);
// este achivo nos serviá para manipular todo el HTML





document.getElementById("btnValidate").addEventListener("click",(event)=>{
    event.preventDefault();

    let creditCardNumber= document.getElementById("myBtn").value;
    console.log(creditCardNumber);
    let validateNumber=(validator.isValid(creditCardNumber));
    console.log(validateNumber);
    if(validateNumber == true){
        let p= document.createElement("p");
      let t=document.createTextNode("Su tarjeta: "+validator.maskify(creditCardNumber)+"  es valida");
      p.appendChild(t);
      document.body.appendChild(p);


      let hideElement = document.getElementById("myBtn");
        hideElement.style.display = "none";
      let hideBtn = document.getElementById("btnValidate");
        hideBtn.style.display = "none";
      let hideText = document.getElementById("hide");
        hideText.style.display = "none";
      let hideH = document.getElementById("hideh2");
        hideH.style.display = "none";

        document.getElementById("cardImgId").src = '/imagenes/newimage.png';
    }else{
        alert("Inserte una tarjeta valida")
    }
    
    
    
});


document.getElementById("btnValidate").addEventListener("click",(event)=>{
    event.preventDefault();

if(document.getElementById("myBtn").value == ""){
    alert("El campo de numero de tarjeta es requerido");
}

});
