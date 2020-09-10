var listado=[];

function guardar(){


    

    var articulos={}; //defino el objeto
    var art=document.getElementById('articulo').value;//obtengo los valores 
    var prec=document.getElementById('precio').value;
    var cant=document.getElementById('cantidad').value;
    articulos.articulo=art;//guardo los valores
    articulos.precio=prec;
    articulos.cantidad=cant;
    articulos.subtotal=prec*cant;


   
    listado.push(articulos); //agrego los valores al final de la colección
  
    localStorage.setItem('lista', JSON.stringify(listado));
   console.log(localStorage.getItem("lista"));

}




