// fetch para visualizar la api de registro de pacientes

fetch("https://63ce07eb6d27349c2b668fcd.mockapi.io/nuevoregistro")
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))



//Registro de un nuevo paciente a través de un formulario

const formRegistro = document.querySelector("#form-registro")
const nombreInput = document.querySelector("#input-nombre")
const apellidosInput = document.querySelector("#input-apellidos")
const edadInput = document.querySelector("#input-edad")
const pacienteNuevoInput = document.querySelector("#input-pacientenuevo")
const nombretutorInput = document.querySelector("#input-nombretutor")
const emailInput = document.querySelector("#input-email")


formRegistro.onsubmit = (e) => {
    e.preventDefault()
    swal("Su registro ha sido exitoso", "Nos comunicaremos contigo pronto.", "success")

    fetch("https://63ce07eb6d27349c2b668fcd.mockapi.io/nuevoregistro",{
    method: "POST",
    body: JSON.stringify({
        nombre: nombreInput.value,
        apellidos: apellidosInput.value,
        edad: edadInput.value,
        nuevopaciente: pacienteNuevoInput.value,
        nombretutor: nombretutorInput.value,
        email: emailInput.value,
    }),
    headers: {
        "Content-Type":"application/json"
    }
})
.then( res => res.json())
.then( data => console.log(data))

}