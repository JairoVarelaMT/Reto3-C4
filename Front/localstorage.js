var usuario = sessionStorage.getItem('user');
var arrUser= JSON.parse(usuario);

 $('#usuario_conectado').html(usuario.nombre+" "+ usuario.type);