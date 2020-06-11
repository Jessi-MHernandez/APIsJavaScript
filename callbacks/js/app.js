//LISTADO DE PAISES
const paises = ['Francia', 'España', 'Inglaterra', 'Mexico'];

//SE AGREGA UN NUEVO PAIS DESPUES DE 2 SEGS.
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}

//LOS PAISES SE MUESTRAN DESPUES DE 1 SEG.
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);

}

//AGREGANDO UN NUEVO PAÍS
nuevoPais('Canada', mostrarPaises);

//MOSTRAR PAISES
mostrarPaises();
