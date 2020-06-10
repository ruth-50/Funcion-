
function  recorrer() {
   let  arrays= [];  
    
    for (let i = 0; i < 10; i++) {
        arrays.push(i)   
      
    }
    return arrays
   
}
let s = recorrer()  
 

 

function  sumar(adicion) {
 let sum = (a , b)=> a + b
return  adicion.reduce(sum); 
    
} 





function name() {
    let primero = [20,30,40]
    let segundo = sumar([37,90])
    console.log(segundo);
    console.log(sumar(primero));
    console.log(sumar(s));
}
name()