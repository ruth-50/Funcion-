
function  recorrer() {
   let  arrays= [ ];  
    
    for (let i = 0; i < 10; i++) {
        arrays.push(i)   
      
    }
    return arrays
   
}
console.log(recorrer());  
 

 

function  sumar() {
 let sum = (a , b)=> a + b
return   recorrer().reduce(sum); 
    
} 

let s =  sumar()



function name() {
    console.log(sumar());
}
name()