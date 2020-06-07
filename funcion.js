let arrays ;
let a ;
function  recorrer() {
    arrays= [1,2,3,4,5,6];  
    arrays.push(78,1)
    for (let i = 0; i < arrays.length; i++) {
        a = arrays[i]
        
    }
}


function  sumar(acumulador , contador) {
        return acumulador + contador
} 
recorrer()
let b = arrays.reduce(sumar)



function mostrar() {
    console.log(b);
}
mostrar() 