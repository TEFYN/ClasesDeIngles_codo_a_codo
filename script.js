
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  var inputNombre = document.getElementById("input-nombre").value;
  var valorNum = document.getElementById("input-tel").value;
  var valorEmail = document.getElementById("input-email").value;
  var opcionesClases = document.getElementById("opciones-clases").selectedIndex;
  
  if (
    (inputNombre == null ) ||
    (inputNombre.length == 0) ||
    (/^\s+$/.test(inputNombre))
  ) {
    alert('[ERROR] El campo "Nombre completo" debe tener un nombre completo');
    return ;
  } else if (isNaN(valorNum)) {
    alert('[ERROR] El campo "Telefono" debe tener un valor numerico.');
    return ;
  } else if ( (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valorEmail))  ) {
    alert("La dirección de email " + valorEmail + " es incorrecta.");
    return ;
  } else if (opcionesClases == null || opcionesClases == 0) {
    alert("[ERROR] Seleccione un curso.");
    return;
  } 
this.submit() 
}
