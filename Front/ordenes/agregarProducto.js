var usuario = sessionStorage.getItem('user');
var user_online= JSON.parse(usuario);
const json= { 
    id: 3, 
    registerDay: "2021-11-15T05:00:00.000+00:00", 
    status: "Pendiente", 
    salesMan:     
                {    id: user_online.identification,
                     identification: user_online.identification,
                     name: user_online.name,
                     birthtDay: "1966-02-15T05:00:00.000+00:00",
                     monthBirthtDay: "02",
                     address: user_online.address,
                     cellPhone: user_online.cellPhone,
                     email: user_online.email,
                     password: user_online.password,
                     zone: user_online.zone,
                     type: user_online.type 
                },
    products: {
               
            }, 
            quantities: {   "AP-904": 1,
                            "AP-903": 1
                             
                        }
}

$(document).ready(function(){
    
});
 
 function AgregarPedido(reference, cantidad) {
     console.log(cantidad)
    $.ajax({
        url:"http://132.226.255.90:8080/api/fragance/"+reference,
        type: 'GET',
        dataType: "json",

        success:function(respuesta){
            const nuevo = {
                [`${respuesta.reference}`]: 
                        {
                            reference:  respuesta.reference,
                            brand: respuesta.brand,
                            category: respuesta.category,
                            presentation: respuesta.presentation,
                            description: respuesta.description,
                            availability: respuesta.availability,
                            price: respuesta.price,
                            quantity: respuesta.quantity,
                            photography: respuesta.photography
                        }
                }
                json.products[ [`${respuesta.reference}`]] =  nuevo;
        },
        error:function(xhr,status){
            console.log(status);
        },
    });
}

 function eliminarProducto(params) {
    
 }
 function recorrerTabla(tabla) {
    
 } 