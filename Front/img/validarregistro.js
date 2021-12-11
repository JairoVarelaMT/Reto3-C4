function validar(){
    const nombre=document.getElementById('nombre');
    const email=document.getElementById('email');
    const clave=document.getElementById('clave');
    const clave2=document.getElementById('clave2');
    const expReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(nombre.value.length==0){
        alert("Ingreses su nombre completo")
        nombre.focus();
        return 0;
    }
    if(email.value.length==0){
        alert("Ingreses un correo electronico")
        email.focus();
        return 0;
    }
    if(expReg.test(email.value)==false){
        alert("Ingrese un email válido");
        email.focus();
        return 0;
    }
    if(clave.value.length==0){
        alert("Ingrese una contraseña")
        clave.focus();
        return 0;
    }
    if(clave.value.length<6){
        alert("La Contraseña debe tener más de 6 caracteres")
        clave.focus();
        return 0;
    }
    if(clave2.value.length==0){
        alert("Confirme su contraseña")
        clave2.focus();
        return 0;
    }
    if(clave.value!=clave2.value){
        alert("Las constraseñas no coiciden")
        clave.focus();
        return 0;
    }
    $.ajax({
    url: "http://localhost:8080/api/user/" + email.value,
    type: 'GET',
    dataType: 'json',
    success: function (valemail) {
        console.log(valemail);
        agregarUsuario(valemail);
    },
    error: function (xhr, status) {
        $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        console.log(status);
    }});

function agregarUsuario(valemail){
        if(valemail== true){
            console.log("Email existe en base de datos")
            alert("El email ya esta registrado en la Base de Datos")
        }
        else {
        let var2 = {
            email:$("#email").val(),
            password:$("#clave2").val(),
            name:$("#nombre").val(),
            };
        console.log(var2);
        let datosAgregar = JSON.stringify(var2)

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: datosAgregar,
        url:"http://localhost:8080/api/user/new",

        success:function(response) {
                console.log(response);
            console.log("Usuario se registró correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se registró correctamente");
        }
            });
    }
}
}
