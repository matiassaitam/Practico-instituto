$(document).ready(function(){
	$("#boton1").click(function(){
		$.ajax({
			url: "http://www.scaggiano.com.uy/json.js",
			success: function(datos){
				var alumnos = JSON.parse(datos);
				completartabla(alumnos);
			
			},

			error: function(){
				$("body").append("<div align='center'><h1> No se pudieron cargar los datos</h1></div>");

			}

		});
	});

});

function completartabla(alumnos){
$("#tabla1").html("");
$("#tabla1").append("<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Mail</th><th>Foto</th></tr></thead>");
$("#tabla1").append("<tbody id='body1'></body>");	
	for (var i = 0; i < alumnos.length; i++)
	$("#body1").append("<tr><td>"+alumnos[i].nombre+"</td><td>"+alumnos[i].apellido+"</td><td>"+alumnos[i].edad+"</td><td>"+alumnos[i].email+"</td><td><div align='center'><img width='100px' src='"+alumnos[i].foto+ "'>" + "</img>"+"</div></td></tr>");
				
}