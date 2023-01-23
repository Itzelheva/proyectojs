let vacunas = [
    {
        idVacuna: 1,
        producto: "BCG",
        precio: 900,
        edadDeAplicacionMeses: 0,
        descripcion: "Previene la Hepatitis B y se recomienda su aplicación desde el nacimiento.",
        oferta: true
    },
    {
        idVacuna: 2,
        producto: "Hepatitis B",
        precio: 700,
        edadDeAplicacionMeses: [0,2,6],
        descripcion: "Previene la Hepatitis B y se aplican 3 dósis a los 0, 2 y 6 meses de edad.",
        oferta: true
    },
    {
        idVacuna: 3,
        producto: "Pentavalente acelular",
        precio: 1000,
        edadDeAplicacionMeses: [2,4,6,18],
        descripcion: "Previene enfermedades como difteria, tos ferina, tétanos, influenza tipo B y hepatitis B y se aplican 4 dósis a los 2,4,6 y 18 meses de edad.",
        oferta: false
    },
    {
        idVacuna: 4,
        producto: "Rotavirus",
        precio: 1700,
        edadDeAplicacionMeses: [2,4,6],
        descripcion: "Previene la enfermedad de rotavirus y se aplican 3 dósis a los 2, 4 y 6 meses de edad.",
        oferta: false
    },
    {
        idVacuna: 5,
        producto: "Neumococo conjugada",
        precio: 2400,
        edadDeAplicacionMeses: [2,4,12],
        descripcion: "Previene la influenza estacional y se aplican 3 dósis a los 2, 4 y 12 meses de edad.",
        oferta: true
    },
    {
        idVacuna: 6,
        producto: "Influenza",
        precio: 450,
        edadDeAplicacionMeses: [6],
        descripcion: "Previene la influenza estacional y se recomienda una apliación anual, iniciando desde los 6 meses de edad.",
        oferta: false
    },
]



const list = document.createElement('div')

vacunas.forEach(element => {
    const listitem = document.createElement('div');
    listitem.onclick = () => {
        swal(`La vacuna de ${element.producto} ${element.descripcion}`)
        
    }
    listitem.append(element.producto);
    list.append(listitem);
});

console.log(document.getElementsByClassName('vaccines'))
document.getElementsByClassName('vaccines')[0].append(list)