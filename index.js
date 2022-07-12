//Datos de la posicion
let tituloDeLaPosicion = document.getElementById("tituloDeLaPosicion");
let nombreCliente = document.getElementById("nombreCliente");
let idPosicion = parseInt(document.getElementById("idPosicion"));
let vacantes = parseInt(document.getElementById("vacantes"));
let fechaInicio = Date.parse(document.getElementById("fechaInicio")); //conseguir prompt para fecha
let fechaLimite = Date.parse(document.getElementById("fechaLimite"));

//Datos para tus méticas
let fechaAsignacion = Date.parse(document.getElementById("fechaAsignacion"));
let fechaCierrePuesto = Date.parse(document.getElementById("fechaCierrePuesto")) //conseguir prompt para fecha
let invitaciones = parseInt(document.getElementById("invitaciones"));
let presentaciones = parseInt(document.getElementById("presentaciones"));
let entrevistas = parseInt(document.getElementById("entrevistas"));
let cantContrataciones = parseInt(document.getElementById("contraciones"));

let puestoArray = ["tituloDeLaPosicion", 'cliente', 'id', 'vacantes', 'inicio', 'limite' ];

function nuevoPuesto () {
    let lineaPuesto = puestoArray.map(puesto => `<tr>${puesto}</tr>`).join(`\n`);
    document.querySelector('tbody').innerHTML = lineaPuesto;
}

nuevoPuesto();

let guardar = document.querySelector('button');
let input = document.querySelector('input');

guardar.addEventListener('click', () =>{
    puestoArray.push(input.value);
    input.value = '';
    nuevoPuesto();
});




























//let invitacionesAceptadas = parseInt(prompt("Cuántos candidatos acceptaron las invitaciones y se postularon?"));
//let fechaPresentacion = Date conseguir prompt para fecha




/* functions para transformar fechas
let fecha = new date (prompt("Entre la fecha en formato dd/mm/aaaa"));

function formatoDeFecha(fecha) {
    let nuevoFormato = fecha.toLocaleDateString('es-AR');
    return nuevoFormato;
} 

alert (fecha);*/
/* 
const puestos = [
    {titulo: "Ingeniero de Produccion", id: 123456, nombreCliente: "Lenovo", vacantes: 5, fechaInicio: 25/12/2022, fechaLimite: 20/12/2022},
    {titulo: "Contador", id: 123686, nombreCliente: "Samsung", vacantes: 1, fechaInicio: 21/10/2022, fechaLimite: 16/10/2022},
    {titulo: "Recepcionista", id: 18746, nombreCliente: "Microsoft", vacantes: 3, fechaInicio: 2/09/2022, fechaLimite: 28/09/2022},
    {titulo: "Especialista de Marketing", id: 524456, nombreCliente: "Microsoft", vacantes: 5, fechaInicio: 02/1/2023, fechaLimite: 28/12/2022},
    {titulo: "Vendedor", id: 151496, nombreCliente: "Meta", vacantes: 2, fechaInicio: 25/12/2022, fechaLimite: 20/12/2022},

];

let buscaPuesto = prompt("Ingresse el titulo de la posicion");

const puestoAbierto = puestos.find(el => el.titulo === buscaPuesto);
alert(puestoAbierto);

 */

/* partes de codigo que podremos llegar a usar

let vacantesLlenas = parseInt(prompt("Cuántas de las vacantes se ha llenado?"));
let vacantesRestantes = vacantes - vacantesLlenas;

let razonDeLlenado = (100 * vacantesLlenas) / vacantes;

if (vacantesLlenas > vacantes) {
    alert("Número de vacantes llenas debe ser menor o igual al número de vacantes");

    
}
else if (vacantesLlenas == vacantes) {
    alert ("Ya llenaste todas las vacantes. Podés cerrar el puesto");
    
}

else if (vacantesLlenas < vacantes) {
    alert ("Has llenado el" + razonDeLlenado + "% de las vacantes. Te quedan " + vacantesRestantes + " por llenar");

}
*/

























/* let tituloDeLaPosicion = prompt("Título de la Vancante");

let id = prompt(parseInt("Entre el ID de la cavante"));

let inicio = prompt (new Date("Cuándo va a ser el primer dia de  trabajo del contratado"));

let limite = new Date("2022/07/29");
/* let hoy = new date("");  

let vacantes = prompt("Cuantas vacantes hay que llenar para este puesto?");

if (vacantes <=0) {
    alert("El puesto tiene que tener por lo menos una vancate");
    
}

else if (asignacion) {

}

let asignacion = prompt("Cuándo te asignaron la búsqueda? DD/MM/YYYY");

let fechaAsignacion = new Date(asignacion);

let contratado = new Date("2022/06/29");

let invitaciones = prompt("Cuántos candidatos has invitado a que se postulen?");

let presentaciones = prompt("Cuántos candidatos has presnetado al cliente?");

let entrevistas = prompt("Cuántos candidatos fueron entrevistados por el cliente?");

let contratados = prompt("Cuántos candidatos fueron contratados por el cliente?");



let tiempoParaPresentarSeg = limite - asignacion;
let diasParaPresentar = tiempoParaPresentarSeg / (1000 * 3600 * 24);


alert(`El puesto ${tituloDeLaPosicion} (ID  ${id}) se ha registrado exitosamente. 
Tenés ${diasParaPresentar} días para presentar los candidatos de la vacante`); */