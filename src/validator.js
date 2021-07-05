//aqui toda la logica
const validator = {
  // ...
  "isValid": function(creditCardNumber){
    let digits = creditCardNumber.toString().split('').map(Number).reverse().map((digit,i)=>{
      if(i%2 !==0){
        let mult = digit*2;
        if(mult > 9){
            mult-=9
        }
      return mult
       
         
      }
      
     return digit;  
     
      

  })
  console.log(digits)
 const reducer= (acumulator,currentValue) => acumulator+currentValue;
 let total= (digits.reduce(reducer));
 console.log(total);
 if(total%10 ==0){
     let validarNumero =true;
     return validarNumero
 }
   

    
  }
  //,"makify": fuction(traerValue){

 // }

  };


export default validator;
