
var usuario = sessionStorage.getItem('user');
var arrayUser= JSON.parse(usuario);


$(document).ready(function(){
    tablaUsuario();


});

function tablaUsuario(){
    let myTable="<table>";
    for(i=0;i<1;i++){
        myTable+="<tr>";
        myTable+="<td>"+"nombre: "+arrayUser.name+"</td>";
        myTable+="<tr>";
        myTable+="<td>"+"type: "+arrayUser.type+"</td>";
        myTable+="<tr>";
        myTable+="<td>"+"Email: "+arrayUser.email+"</td>";
        myTable+="<tr>";
        myTable+="<tr>";
        myTable+="<td>"+"<a class='nav-link' onclick='cerrarSesion(); style: cursor: pointer;'> <strong>Cerrar Sesion</strong> </a>";
        myTable+="<tr>";
    }
    myTable+="</table>";
    $("#tbUser").html(myTable);
}
function cerrarSesion(){
    sessionStorage.clear();
    window.open("/Front/index.html","_self")
}
