//PROMISES
/*
const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Se ejecutó');
    }, 5000);
} );

esperando.then(function(mensaje){
        console.log(mensaje);

})
*/

//PROMISES
const aplicarDescuento = new Promise(function(resolve,reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado');

    }else{
        reject('No se puede aplicar el descuento');

        }
    
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);

}).catch(function(error){
    console.log(error);
})