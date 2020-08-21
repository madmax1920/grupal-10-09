var lista=[];
function guardar(){
    var articulos={}; //defino el objeto
    var art=document.getElementById('articulo').value;//obtengo los valores 
    var prec=document.getElementById('precio').value;
    var cant=document.getElementById('cantidad').value;
    articulos.articulo=art;//guardo los valores
    articulos.precio=prec;
    articulos.cantidad=cant;
    articulos.subtotal=prec*cant;
    

    lista.push(articulos); //agrego los valores al final de la colección
    mostrar(lista);//llamo a la funcion para mostrar los datos 
    sumar();

}

function mostrar(lista){

var tabla = "<table border =1> <th> Articulos </th><th>Cantidad</th><th> Precio Unitario</th><th> Precio</th>"; //escribe el encabezado
for (i=0; i<lista.length; i++){

    tabla+="<tr align='center'><td>" + lista[i].articulo + "</td><td>" + lista[i].cantidad +"</td><td>" + lista[i].precio +"</td><td>" + lista[i].subtotal+"</td></tr>";
}
tabla+="</table>";
document.getElementById('lista').innerHTML=tabla;
}

function ordenar(){
    lista.sort( function(ant, sig){
        return ant.precio-sig.precio; //comparo el campo precio

    });
    mostrar(lista);
}
function ordenonombre(){
    lista.sort( function(ant, sig){ //comparando el campo nombre
        if (ant.articulo > sig.articulo){
            return 1;
        }
        if (ant.articulo < sig.articulo) {
            return -1;
        } 
        return 0;
    
    });
    mostrar(lista);
}
function ordenarcantidad(){
    lista.sort( function(ant, sig){
        return ant.cantidad-sig.cantidad; //comparo el campo precio

    });
    mostrar(lista);
}
function sumar(){
  total=0;
    for(i=0;i<lista.length;i++){
        total=total+lista[i].subtotal;
    }
    document.getElementById('total').innerHTML=total;
}