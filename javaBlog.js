function iniciar(){
var boton=document.getElementById('guardar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}
function nuevoitem(){
var valor=document.getElementById('texto').value;
localStorage.setItem(valor);
mostrar();
document.getElementById('texto').value='';
}

function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='';
for(var f=0;f<localStorage.length;f++){
	var valor=localStorage.getItem(valor);
	cajadatos.innerHTML+='<div>'+valor+'</div>';
}
}

window.addEventListener('load', iniciar, false);
function elimina()
{

	if(confirm('Está Seguro?')){
		localStorage.clear();
		mostrar();
		}
}