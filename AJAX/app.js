document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    //CREAR EL OBJETO XMLHTTPREQUEST
    const xhr = new XMLHttpRequest();

    //ABRIR UNA CONEXION
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }

    }

    //    Ready status
    /*
        0   no inicializado
        1   conexion establecida
        2   recibido
        3   procesando
        4   respuesta lista

    */


            //UNA VEZ QUE CARGA LA PAGINA
        //  xhr.onload = function(){
                //200:Correcto  | 403: Prohibido    | 404: No encontrado
        //      if(this.status === 200){
                // console.log(this.responseText);
        //          document.getElementById('listado').innerHTML = `<h1>${this.responseText}<h1>`;
        //      }
        //  }
            
        
  
    //ENVIAR EL REQUEST
    xhr.send();

}