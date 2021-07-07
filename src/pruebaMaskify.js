function maskify(creditCardNumber){
    let maskifyNum= creditCardNumber.split('').map((letter,i)=>
   i< creditCardNumber.length -4 ? '#' : letter).join('');
   console.log(maskifyNum)
   
   return maskifyNum

  }

  maskify("7854328988765431")