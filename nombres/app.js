document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//LLAMADO A AJAX E IMPRIMIR RESULTADOS
function cargarNombres(e){
    e.preventDefault();
    //console.log('Si');

    //LEER LAS VARIABLES
    const apiKey = '53ae89eb5f3cd54814a53cc2d9085fc4';
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

   /* const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;
    */

    let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${origenSeleccionado}&api_key=${apiKey}&format=json`;

    //SI HAY ORIGEN AGREGARLO A LA URL
    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`;
    }
    //SI HAY UN GENERO AGREGARLO A LA URL
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    //SI HAY UNA CANTIDAD AGREGARLO A LA URL
    if(cantidad !== ''){
        url += `amount=${cantidad}&`;
    }
    
    //CANECTAR CON AJAX
    //INICIAR XMLHTTRequest
    const xhr = new XMLHttpRequest();
    //ABRIMOS LA CONEXION
    xhr.open('GET', url, true);
    //DATOS E IMPRESION DEL TEMPLATE
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(JSON.parse(this.responseText));
            const nombres = JSON.parse(this.responseText);
            //GENERAR EL HTML
            let htmlNombres = '<h2>Nombres generados</h2>';

            htmlNombres += '<ul class="lista">'
            //IMPRIMIR CADA NOMBRE
            nombres.forEach(function(nombre){
                htmlNombres += `
                    <li>${nombre.name}</li>
                    
                    `; 
            })

            htmlNombres += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    //ENVIAR EL Request
    xhr.send();


}
