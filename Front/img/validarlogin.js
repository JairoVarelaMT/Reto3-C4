
function validar(){
    const email=document.getElementById('email');
    const clave=document.getElementById('clave');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(email.value.length==0){
        alert("Ingreses su usuario")
        usuario.focus();
        return 0;
    }
    if(clave.value.length==0){
        alert("Ingrese su contraseña")
        clave.focus();
        return 0;
    }

    $.ajax({
        url: "http://localhost:8080/api/user/" + email.value + "/"+ clave.value,
        type: 'GET',
        dataType: 'json',
        success: function (valeuser) {
            console.log("primer llamado",valeuser);
            validarUsuario(valeuser);
            sessionStorage.setItem('user',JSON.stringify(valeuser));
        },
        error: function (xhr, status) {
            $("#mensajes").html("Error en la petición..." + status);
            console.log(status);
        }});

function validarUsuario(valeuser){
    userGlobal=valeuser;
    if(valeuser.id != null && valeuser.name != "NO DEFINIDO"){
        console.log("dentro del if", userGlobal);
        alert("Email Válido");
        window.open("/Usuario.html","_self")
    } else{
        alert("Email o Contraseña NO válidos")
    }
}
}