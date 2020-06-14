
function  recorrer(m) {
  
   let  arrays= [];  
    
    for (let i = 0; i < m; i++) {
        
        arrays.push(i)   

      
    }
    return arrays
   
}

function  sumar(adicion) {
 let sum = (a , b)=> a + b
return  adicion.reduce(sum); 
    
} 
let s = recorrer(10)
console.log(sumar(s));


// function name() {
    
//     let s = recorrer()  
//     let primero = [20,30,40]
//     let segundo = sumar([37,90])
   
//     console.log(segundo);
//     console.log(sumar(primero));
//     console.log(sumar(s));
// }
// name()