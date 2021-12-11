var usuario = sessionStorage.getItem('user');
var arrUser= JSON.parse(usuario);


console.log("objeto obtenido: ", arrUser);

function tablaHtml(){
    let myTable="<table>";
    for(i=0;i<1;i++){
        myTable+="<tr>";
        myTable+="<td>"+"ID: "+arrUser.id+"</td>";
        myTable+="<tr>";
        myTable+="<td>"+"Nombre: "+arrUser.name+"</td>";
        myTable+="<tr>";
        myTable+="<td>"+"Email: "+arrUser.email+"</td>";
        myTable+="<tr>";
    }
    myTable+="</table>";
    $("#tbUser").html(myTable);
console.log(arrUser.name)
}
function cerrar(){
    sessionStorage.clear();
    window.open("/login.html","_self")
}