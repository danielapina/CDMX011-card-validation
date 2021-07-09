let nombre = ["Daniela", "Piña","Olivares"]

/*for(let contador=0; contador<=2; contador++){
    console.log(nombre[contador])
}*/

nombre=nombre.map(elemento=>{
    return elemento.toUpperCase()
})
console.log(nombre)