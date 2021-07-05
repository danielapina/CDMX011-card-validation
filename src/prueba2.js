function isValid(traerValor){
    
    let digits = traerValor.toString().split('').map(Number).reverse().map((digit,i)=>{
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
       console.log(validarNumero);
   }


        
    }
   
    


  
    
       
    

isValid("7854328988765431")