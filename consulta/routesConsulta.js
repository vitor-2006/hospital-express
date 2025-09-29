import express from "express"
import { getConsulta } from "./get.js";
import { createConsulta } from "./post.js";
import { updateConsulta } from "./put.js";
import { deleteConsulta } from "./delete.js";
import { pesqPorData, pesqPorDescrisao, pesqPorIdMedico, pesqPorIdPaciente } from "./pesquisa.js";

// let consulta = []
// let idGen = 1

const routesConsulta = express.Router()

// routesConsulta.get('/consulta', (req, res) => {
//     return res.json(consulta);
// });

routesConsulta.get('/consulta', async (req, res) => {
    const consultas = await getConsulta()
    res.status(200).send(consultas)
});

// routesConsulta.post('/consulta', (req, res) => {
//     const novaConsulta = 
//         {
//         'data': req.body.data,
//         'descrisao': req.body.descrisao,
//         'idMedico': req.body.idMedico,
//         'idPaciente': req.body.idPaciente,
//         'id': idGen
//         }
//     idGen++
//     consulta.push(novaConsulta)
//     return res.status(201).send('Consulta registrada!')
// })

routesConsulta.post('/consulta', async (req, res) => {
    const { data, descrisao, idMedico, idPaciente } = req.body
    const newConsulta = await createConsulta(data, descrisao, idMedico, idPaciente)
    res.status(201).send({ message: 'consulta criada com sucesso', consulta: newConsulta })
})

// routesConsulta.put('/consulta/:id', (req, res) => {
//     const { id } = req.params
//     consulta.find((element) => {
//         if(element.id === parseInt(id)){
//             let update = req.body
//             element.data = update.data
//             element.descrisao = update.descrisao
//             element.idMedico = update.idMedico
//             element.idPaciente = update.idPaciente
//             return res.send("Consulta editada com sucesso!")
//         }
//     })
//     return res.send("Consulta não encontrada!")
// })


routesConsulta.put('/consulta/:id', async (req, res) => {
    const { id } = req.params
    const { data, descrisao, idMedico, idPaciente } = req.body
    const updatedConsulta = await updateConsulta(id, data, descrisao, idMedico, idPaciente)
    if(updatedConsulta) {
        res.status(200).send({ message: 'consulta atualizada com sucesso', consulta: updatedConsulta })
    } else {
        res.status(404).send({ message: 'consulta não encontrada' })
    }
})

// routesConsulta.delete('/consulta/:id', (req, res) => {
//     const { id } = req.params
//     const consultaFind = consulta.findIndex((element) => element.id == id)

//     if(consultaFind !== -1){
//         consulta.splice(consultaFind, 1)
//         return res.send('Consulta removida!')
//     }
//     return res.send("Consulta não encontrada")
// })

routesConsulta.delete('/consulta/:id', async (req, res) => {
    const { id } = req.params
    const deletedConsulta = deleteConsulta(id)
    if(deletedConsulta) {
        res.status(200).send({ message:'consulta deletada com sucesso', consulta: deletedConsulta })
    } else {
        res.status(404).send({ message: 'consulta não encontrada' })
    }
})

// routesConsulta.get('/consulta/', (req, res) => {
//     const { data } = req.query
//     const consultaFind = consulta.find((element) => {
//         if(element.data === data){
//             return element
//         }
//     })
//     return res.send(consultaFind)
// })

// routesConsulta.get('/consulta/', (req, res) => {
//     const { descrisao } = req.query
//     const consultaFind = consulta.find((element) => {
//         if(element.descrisao.toLowerCase().trim() === descrisao.toLowerCase().trim()){
//             return element
//         }
//     })
//     return res.send(consultaFind)
// })

// routesConsulta.get('/consulta/', (req, res) => {
//     const { IdPaciente } = req.query
//     const consultaFind = consulta.find((element) => {
//         if(element.IdPaciente === IdPaciente){
//             return element
//         }
//     })
//     return res.send(consultaFind)
// })

// routesConsulta.get('/consulta/', (req, res) => {
//     const { IdMedico } = req.query
//     const consultaFind = consulta.find((element) => {
//         if(element.IdMedico === IdMedico){
//             return element
//         }
//     })
//     return res.send(consultaFind)
// })

routesConsulta.get('/consulta/search', async (req, res) => {
    const { data, descrisao, idMedico, idPaciente } = req.query
    let searchConsulta 
    if(data) {
       searchConsulta = await pesqPorData(data)
    } else if(descrisao) {
        searchConsulta = await pesqPorDescrisao(descrisao)
    } else if(idMedico) {
        searchConsulta = await pesqPorIdMedico(idMedico)
    } else if(idPaciente) {
        searchConsulta = await pesqPorIdPaciente(idPaciente)
    }
    if(searchConsulta) {
        res.status(200).send(searchConsulta)
    } else {
        res.status(404).send({ message: 'consulta não encontrada' })
    }
})

export { routesConsulta }