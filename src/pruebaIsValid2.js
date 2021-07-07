function isValid(traerValor){
    
    let digits = traerValor.toString().split('').map(Number);
    console.log(digits);
    let reverse=digits.reverse();
    console.log(reverse);
    for(let i=1; i <= reverse.length; ++i){
        if(i%2!==0){
            let mult= (reverse[i]*2);
            console.log(mult);
            if(mult > 9){
               let rest= mult -=9
               console.log(rest)
            }
        }
    }
    for(let i=0; i < reverse.length; ++i){
        if(i%2==0){
            let suma=0;
            let evenNumbers= (reverse[i]);
            console.log(evenNumbers)
            console.log(typeof evenNumbers) 
            console.log(suma)    
            }    
        }
       
        
        
        
    }
    
       

            

        
        
    

    

isValid("7854328988765431")