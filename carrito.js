

function ordenar(array){
    array.sort( function(ant, sig){
        return ant.precio-sig.precio; //comparo el campo precio

    });
    mostrar(array);
}
function ordenonombre(array){
    array.sort( function(ant, sig){ //comparando el campo nombre
        if (ant.articulo > sig.articulo){
            return 1;
        }
        if (ant.articulo < sig.articulo) {
            return -1;
        } 
        return 0;
    
    });
    mostrar(array);
}

function ordenarcantidad(array){
    array.sort( function(ant, sig){
        return ant.cantidad-sig.cantidad; //comparo el campo precio

    });
    mostrar(array);
}



function sumar(array){
    total=0;
      for(i=0;i<array.length;i++){
          total=total+array[i].subtotal;
      }
      document.getElementById('total').innerHTML=total;
  }


  document.addEventListener("DOMContentLoaded",function(e){
   var lista = localStorage.getItem("lista");

  lista= JSON.parse(lista);

    if((lista.length===0)||(lista===null)){
        document.getElementById("productos").innerHTML=`<h5>El carrito tiene <span class="badge"> ${lista.length} </span> elementos</h5>`; 
    } else{
        
            var tabla = "<table border =1> <th> Articulos </th><th>Cantidad</th><th> Precio Unitario</th><th> Precio</th>"; //escribe el encabezado
            for (i=0; i<lista.length; i++){
            
                tabla+="<tr align='center'><td>" + lista[i].articulo + "</td><td>" + lista[i].cantidad +"</td><td>" + lista[i].precio +"</td><td>" + lista[i].subtotal+"</td></tr>";
            }
            tabla+="</table>";
            document.getElementById('productos').innerHTML=tabla;
            }
  });

//   document.getElementById

