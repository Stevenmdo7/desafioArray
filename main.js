let opcion
const pacientes = []

function ingresarPaciente() {
  const paci = {} 
  paci.nombre = prompt("Ingrese el nombre del paciente:")
  paci.edad = parseFloat(prompt("Ingrese la edad del paciente:"))
  paci.domicilio = prompt("Ingrese el domicilio del paciente:")
  paci.diagnostico = prompt("Ingrese el diagnóstico del paciente:")
  pacientes.push(paci);
console.log("Paciente ingresado correctamente.")
}
function eliminarPaciente() {
    if (pacientes.length === 0) {
      console.log("No hay pacientes ingresados para eliminar.");
      return;
    }
  const pacienteMuerto = parseInt(prompt("Ingrese el número del paciente que desea eliminar:")) - 1;
  if (isNaN(pacienteMuerto) || pacienteMuerto < 0 || pacienteMuerto >= pacientes.length) {
    console.log("Número de paciente inválido.");
    return;
  }
  const pacienteEliminado = pacientes.splice(pacienteMuerto, 1);
  console.log(`Paciente ${pacienteEliminado[0].nombre} ha sido eliminado.`);
}
function propiedad(Pasteur) {
  if (pacientes.length === 0) {
    console.log("No hay pacientes ingresados.")
    return;
  }
  for (let i = 0; i < pacientes.length; i++) {
    console.log(`Paciente ${i + 1}: ${pacientes[i][propiedad]}`)
  }
}
do {
    opcion = parseInt(prompt("Seleccione una opción siendo:\n1. Ingresar nuevo paciente\n2. Mostrar nombres de pacientes\n3. Mostrar edades de pacientes\n4. Mostrar domicilios de pacientes\n5. Mostrar diagnósticos de pacientes\n6. Eliminar paciente\n0. Salir"))
  if (opcion === 1) {
    ingresarPaciente()
  } else if (opcion === 2) {
    propiedad("nombre")
  } else if (opcion === 3) {
    propiedad("edad")
  } else if (opcion === 4) {
    propiedad("domicilio")
  } else if (opcion === 5) {
    propiedad("diagnostico")
  } else if (opcion === 6) {
    eliminarPaciente();
  }  else if (opcion !== 0) {
    console.log("TOSCO TENIAS QUE SER NO? No sabes contar papi? del UNO al CINCO!!")
}
} while (opcion !== 0)