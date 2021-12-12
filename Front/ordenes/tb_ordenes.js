$(document).ready(function(){
    fragances();
   
    orders();
    
});

function fragances(){
    $.ajax({
        url:"http://132.226.255.90:8080/api/fragance/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarFrangance(respuesta);
        }
    });
}
//
function mostrarFrangance(respuesta){
    var myTable=`<table class=" table table-info table-striped" border="2">
                <tr>
                
                <th>Nombre</th>
                <th>categoria</th>
                <th>description</th>
                <th>Disponibilidad</th>
                <th>precio</th>
                <th>fotografia</th>
                <th>cantidad</th>
                <th colspan="2" align="center">Acciones</th>
                </tr>`;
    for(i=0;i<respuesta.length;i++){
        
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].reference+"</td>";
        myTable+="<td>"+respuesta[i].category+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].availability+"</td>";
        myTable+="<td>"+respuesta[i].price+"</td>";
        myTable+="<td>"+respuesta[i].photography+"</td>";
        myTable+='<td>  <select id="cantidad" class="form-select"> <option value="1">1 </option> <option value="2">2 </option> <option value="3">3 </option> <option value="4">4 </option> <option value="5">5 </option> <option value="6">6 </option> <option value="6">6 </option> <option value="7">7 </option> <option value="8">8 </option> <option value="9">9 </option><option value="10">10 </option></select>' 
        myTable+='<td> <button class="btn " onClick="AgregarPedido(\'' + respuesta[i].reference + '\' , '+ parseInt($('#cantidad').val())+')" /><i class="bi bi-x-octagon-fill"></i>Add</button>';
        myTable+='<td> <button class="btn " onClick="EliminarProducto(\'' + respuesta[i].reference + '\')" />Eliminar<i class="bi bi-pencil-square"></i></button>'
        
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaFragance").html(myTable);
}
function orders() {
    $.ajax({
        url:"http://132.226.255.90:8080/api/order/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            mostrarOrders(respuesta);
        }
    });
}
function mostrarOrders(respuesta) {
    var myTable=`<table class=" table table-info table-striped" border="2">
                <tr>
                <th>Identificacion</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>tipo</th>
                <th>zona</th>
                <th colspan="1" align="center">Acciones</th>
                </tr>`;
    for(i=0;i<respuesta.length;i++){
        
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].salesMan.id+"</td>";
        myTable+="<td>"+respuesta[i].salesMan.name+"</td>";
        myTable+="<td>"+respuesta[i].salesMan.email+"</td>";
        myTable+="<td>"+respuesta[i].salesMan.type+"</td>";
        myTable+="<td>"+respuesta[i].salesMan.zone+"</td>";
        myTable+='<td> <button class="btn btn-success " onClick="VerOrdenes( '+ respuesta[i].id +')" /> Ver orden </button>'
       
       
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaOrder").html(myTable);
   
}
function VerOrdenes(orderID){
    $.ajax({
        url:"http://132.226.255.90:8080/api/order/"+orderID,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            console.log("order por id"+respuesta)
            orderPorUsuario(respuesta);
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}
function orderPorUsuario(respuesta) {
    console.log("Entro"+respuesta.id)
        var Table=`<table class=" table table-info table-striped" border="2">
                <tr>
                <th>Fecha</th>
                <th>Numero de pedido</th>
                <th>Estado</th>
                <th>cambiar estado</th>
                <th colspan="1" align="center">Guardar</th>
                </tr>`;
            for(i=0;i<respuesta.length;i++){    
            Table+="<tr>";
            Table+="<td>"+respuesta[i].registerDay+"</td>";
            console.log(respuesta[i].registerDay)
            Table+="<td>"+respuesta[i].id+"</td>";
            console.log(respuesta[i].id)
            Table+="<td>"+respuesta[i].status+"</td>";
            console.log(respuesta[i].status)
            Table+='<td> <select id="estado" class="form-select"> <option value="Pendiente">Pendiente</option><option value="Aprovado">Aprovado</option><option value="Rechazado">Rechazado</option> </select> </td>';
            Table+='<td> <button class="btn btn-success " onClick="cambiarEstado(' + respuesta[i].id + ')" />Guardar</button>'

            Table+="</tr>";
            }
            Table+="</table>";
            $("#tablaOrderPorUsuario").html(Table);
}
function cambiarEstado(id) {
    $.ajax({
        url:"http://132.226.255.90:8080/api/order/"+orderID,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
          
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}