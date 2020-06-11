const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI(){
   // console.log('Presionado');

   //CREAMOS EL OBJETO
   const xhr = new XMLHttpRequest();
    //ABRIR LA CONEXION
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //CARGA Y LEER DATOS
   xhr.onload = function (){
       if(this.status === 200){
          // console.log(this.responseText);
            const respuesta = JSON.parse(this.responseText);
            
            let contenido = ''; 
            respuesta.forEach(function(post){
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
       }
   }
   //ENVIAMOS LA CONEXION
   xhr.send();

}
