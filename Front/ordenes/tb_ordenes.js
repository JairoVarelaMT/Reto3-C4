$(document).ready(function(){
    fragances();
    var tabla=$('#tablaFragance');
    recorrerTabla(tabla);
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
    console.log($('#cantidad').val())
    //parseInt( $('#cantidadProductos').val())
}