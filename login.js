function guardar(dato, pass){  

    //var admin=document.getElementById('dato').value;
    //var passu=document.getElementById('pass').value;

    if (dato.trim()==="" || pass.trim()===""){ //Chequea que el dato recibido no esté vacío. 
    //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        alert("El dato está vacío");
    
    } else if (dato==="admin") {
        if(pass==="admin"){
            location.href="next.html";
        }
        else{
            alert("contrasena incorrecta");
        }
        
    }
    
    else{
    localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
    localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
    sessionStorage.setItem("usuario", dato.trim());
    alert (" Usuario : " + dato + " Password : " + pass ); 
    
   
    location.href="next.html";
    
    //getItem obtiene el dato almacenado en la posición "usuario"
   
    }
}

var usuario = localStorage.getItem("usuario"); //getItem Obtiene el dato de la posición "usuario"
        var sesion = sessionStorage.getItem("usuario");
        document.getElementById('user').innerHTML=usuario;
        document.getElementById('sesion').innerHTML=sesion;
        //Nótese que si cerramos el navegador y volvemos a abrir, el dato sigue almacenado
