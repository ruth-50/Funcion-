let recorer= [1,2,3,4,5,6];


function reco() {
    recorer.push(89,9,70,34)    

 for (let i = 0; i <  1; i++) {
        console.log(recorer); 
    }
    let sumar = (contador , acumulador) => contador + acumulador;
    let sum = recorer.reduce(sumar);
    console.log(sum);
    
}
reco()


