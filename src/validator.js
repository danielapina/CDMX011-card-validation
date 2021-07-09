//aqui toda la logica
const validator = {
  // ...
  "isValid": function(creditCardNumber){
    let digits = creditCardNumber.split('').map(Number).reverse().map((digit,i)=>{
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
let validateNumber= total%10==0 ? true : false;
 console.log(validateNumber)
 
 return validateNumber
 },
 
 "maskify": function(creditCardNumber){
    let maskifyNum= creditCardNumber.split('').map((letter,i)=>
   i< creditCardNumber.length -4 ? '#' : letter).join('');
   console.log(maskifyNum)
   
   return maskifyNum

  }

  };


export default validator;
