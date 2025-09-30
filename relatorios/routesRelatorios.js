// import express from 'express'
// import { routesPaciente } from '../paciente/routesPaciente.js'
// import { routesMedico } from '../medico/routesMedico.js'
// import { routesConsulta } from '../consulta/routesConsulta.js'

// const routesRelatorio = express.Router()

// routesRelatorio.get('/relatorio/consulta/medico/:idMedico', (req, res) => {
//     const { idMedico } = req.params
//   const medicoConsultas = consulta.filter((element) => {
//       return element.idMedico === parseInt(idMedico)
//     })

//     return res.send(medicoConsultas)


// }) 

// routesRelatorio.get('/relatorio/paciente/medico/:idMedico', (req, res) => {
//     const { idMedico } = req.params;

//     // 1. Get all consultations for the doctor. This returns an array of objects.
//     const consultasDoMedico = consulta.filter((elementConsulta) => {
//         return elementConsulta.idMedico === parseInt(idMedico);
//     });

//     // 2. From that array, create a new array containing ONLY the patient IDs.
//     const idsDosPacientes = consultasDoMedico.map((umaConsulta) => {
//         return umaConsulta.idPaciente;
//     });

//     // 3. Filter the main patient list. Keep a patient only if their ID is in our list of IDs.
//     const pacientesEncontrados = paciente.filter((elementPaciente) => {
//         return idsDosPacientes.includes(elementPaciente.id);
//     });

//     // Send the final array of patient objects
//     return res.send(pacientesEncontrados);
// });

// routesRelatorio.get('/relatorio/medico/paciente/:idPaciente', (req, res) => {
//     const { idPaciente } = req.params;

//     const consultasPaciente = consulta.filter((elementConsulta) => {
//         return elementConsulta.idPaciente === parseInt(idPaciente);
//     });

//     const idsDosMedicos = consultasPaciente.map((umaConsulta) => {
//         return umaConsulta.idMedico;
//     });

//     const medicosEncontrados = medico.filter((elementMedico) => {
//         return idsDosMedicos.includes(elementMedico.id);
//     });

//     return res.send(medicosEncontrados);
//     // const { idPaciente } = req.params
//     // const ConsultaFind = consulta.filter((elementConsulta) => {
//     //     elementConsulta.idPaciente === parseInt(idPaciente)
//     // })
//     // const MedicoFind = medico.filter((elementMedico) => {
//     //     ConsultaFind.idMedico === elementMedico.id
//     // })
//     // return res.send(MedicoFind)
// })

// routesRelatorio.get('/relatorio/consulta/mes/:mes', (req, res) => {
//     const { mes } = req.params
//     const mesFind = consulta.filter((element) => {
//         let dataArray = element.data.split('-')
//         return dataArray[1] === mes
//     })
//     return res.send(mesFind)
// })

// export { routesRelatorio }