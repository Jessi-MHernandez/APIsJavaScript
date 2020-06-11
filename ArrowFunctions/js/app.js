//FUNCION
let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo JS');
}

aprendiendo = () => {
    console.log('Aprendiendo JS');
}
//UNA LINEA NNO REQUIERE LLAVES
aprendiendo = () => console.log('Aprendiendo JS');
//RETORNA UN VALOR
aprendiendo = () => 'Aprendiendo JS';
//RETORNA OBJETO
aprendiendo = () => ({aprendiendo: 'Aprendiendo JS'});
//PASAR 1 PARAMETRO
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('Java');
//PASAR MAS PARAMETROS
aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} y ${tecn2} `);
    const productos = ['Disco', 'playera', 'auto'];
    /*
//CALLBACK
    const letrasProducto = productos.map(function(producto){
        return producto.length;
    });
    
//CALLBACK CON UN ARROW FUNCTIONS
   const letrasProducto = productos.map(producto => producto.length);
    */

    productos.forEach(producto => console.log(producto));

//console.log(letrasProducto);