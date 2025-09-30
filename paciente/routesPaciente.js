import express from "express"
import { getPaciente } from './get.js'
import { createPaciente } from './post.js'
import { updatePaciente } from './put.js'
import { deletePaciente } from './delete.js'
import { pesqPorNome, pesqPorDataNascimento } from "./pesquisa.js"

// let paciente = []
// let idGen = 1000

const routesPaciente = express.Router()

// routesPaciente.get('/paciente', (req, res) => {
//     return res.json(paciente);
// });

routesPaciente.get('/paciente', async (req, res) => {
    const pacientes = await getPaciente()
    return res.status(200).send(pacientes)
});

// routesPaciente.post('/paciente', (req, res) => {
//     const novoPaciente = 
//         {
//         'nome': req.body.nome,
//         'dataNascimento': req.body.dataNascimento,
//         'id': idGen
//         }
//     idGen++
//     paciente.push(novoPaciente)
//     return res.status(201).send('Paciente registrado!')
// })

routesPaciente.post('/paciente', async (req, res) => {
    const { nome, dataNascimento } = req.body
    const newPaciente = await createPaciente(nome, dataNascimento)
    if(!newPaciente) {
        return res.status(400).send("paciente inválido!")
    }
    return res.status(201).send({ message: 'Paciente criado com sucesso', paciente: newPaciente })
})

// routesPaciente.put('/paciente/:id', (req, res) => {
//     const { id } = req.params
//     paciente.find((element) => {
//         if(element.id === parseInt(id)){
//             let update = req.body
//             element.nome = update.nome
//             element.dataNascimento = update.dataNascimento
//             return res.send("Paciente editado com sucesso!")
//         }
//     })
//     return res.send("Paciente não encontrado!")
// })

routesPaciente.put('/paciente/:id', async (req, res) => {
    const { id } = req.params
    const { nome, dataNascimento } = req.body
    const updatedPaciente = await updatePaciente(id, nome, dataNascimento)
    if(updatedPaciente) {
        return res.status(200).send({ message: 'Paciente atualizado com sucesso', paciente: updatedPaciente })
    } else {
        return res.status(404).send({ message: 'Paciente não encontrado' })
    }
})

// routesPaciente.delete('/paciente/:id', (req, res) => {
//     const { id } = req.params
//     const pacienteFind = paciente.findIndex((element) => element.id == id)

//     if(pacienteFind !== -1){
//         paciente.splice(pacienteFind, 1)
//         return res.send('Paciente removido!')
//     }
//     return res.send("Paciente não encontrado")
// })

routesPaciente.delete('/paciente/:id', async (req, res) => {
    const { id } = req.params
    const deletedPaciente = deletePaciente(id)
    if(deletedPaciente) {
        return res.status(200).send({ message:'Paciente e suas consultas foram deletados com sucesso', paciente: deletedPaciente })
    } else {
        return res.status(404).send({ message: 'Paciente não encontrado' })
    }
})

// routesPaciente.get('/paciente/', (req, res) => {
//     const { nome } = req.query
//     const pacienteFind = paciente.find((element) => {
//         if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
//             return element
//         }
//     })
//     return res.send(pacienteFind)
// })

// routesPaciente.get('/paciente/', (req, res) => {
//     const { dataNascimento } = req.query
//     console.log(dataNascimento)
//     const pacienteFind = paciente.find((element) => {
//         if(element.dataNascimento === dataNascimento){
//             return element
//         }
//     })
//     return res.send(pacienteFind)
// })

routesPaciente.get('/paciente/search', async (req, res) => {
    const { nome, dataNascimento } = req.query
    let searchPaciente 
    if(nome) {
       searchPaciente = await pesqPorNome(nome)
    } else if(dataNascimento) {
        searchPaciente = await pesqPorDataNascimento(dataNascimento)
    }
    if(searchPaciente) {
        return res.status(200).send(searchPaciente)
    } else {
        return res.status(404).send({ message: 'Paciente não encontrado' })
    }
})

export { routesPaciente }