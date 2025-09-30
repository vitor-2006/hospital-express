import express from "express"
import { getMedico } from "./get.js";
import { createMedico } from "./post.js";
import { updateMedico } from "./put.js";
import { deleteMedico } from "./delete.js";
import { pesqPorNome, pesqPorEspecialidade } from "./pesquisa.js";

// let medico = []
// let idGen = 100

const routesMedico = express.Router()

// routesMedico.get('/medico', (req, res) => {
//     return res.json(medico);
// });

routesMedico.get('/medico', async (req, res) => {
    const medicos = await getMedico()
    return res.status(200).send(medicos)
});

// routesMedico.post('/medico', (req, res) => {
//     const novomedico = 
//         {
//         'nome': req.body.nome,
//         'especialidade': req.body.especialidade,
//         'id': idGen
//         }
//     idGen++
//     medico.push(novomedico)
//     return res.status(201).send('Medico registrado!')
// })

routesMedico.post('/medico', async (req, res) => {
    const { nome, especialidade } = req.body
    const newMedico = await createMedico(nome, especialidade)
    return res.status(201).send({ message: 'medico criado com sucesso', medico: newMedico })
})

// routesMedico.put('/medico/:id', (req, res) => {
//     const { id } = req.params
//     medico.find((element) => {
//         if(element.id === parseInt(id)){
//             let update = req.body
//             element.nome = update.nome
//             element.especialidade = update.especialidade
//             return res.send("Medico editado com sucesso!")
//         }
//     })
//     return res.send("Medico não encontrado!")
// })

routesMedico.put('/medico/:id', async (req, res) => {
    const { id } = req.params
    const { nome, especialidade } = req.body
    const updatedMedico = await updateMedico(id, nome, especialidade)
    if(updatedMedico) {
        return res.status(200).send({ message: 'medico atualizado com sucesso', medico: updatedMedico })
    } else {
        return res.status(404).send({ message: 'medico não encontrado' })
    }
})

// routesMedico.delete('/medico/:id', (req, res) => {
//     const { id } = req.params
//     const medicoFind = medico.findIndex((element) => element.id == id)

//     if(medicoFind !== -1){
//         medico.splice(medicoFind, 1)
//         return res.send('Medico removido!')
//     }
//     return res.send("Medico não encontrado")
// })

routesMedico.delete('/medico/:id', async (req, res) => {
    const { id } = req.params
    const deletedMedico = deleteMedico(id)
    if(deletedMedico) {
        return res.status(200).send({ message:'medico e suas consultas foram deletados com sucesso', medico: deletedMedico })
    } else {
        return res.status(404).send({ message: 'medico não encontrado' })
    }
})

// routesMedico.get('/medico/', (req, res) => {
//     const { nome } = req.query
//     const medicoFind = medico.find((element) => {
//         if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
//             return element
//         }
//     })
//     return res.send(medicoFind)
// })

// routesMedico.get('/medico/', (req, res) => {
//     const { especialidade } = req.query
//     const medicoFind = medico.find((element) => {
//         if(element.especialidade.toLowerCase().trim() === especialidade.toLowerCase().trim()){
//             return element
//         }
//     })
//     return res.send(medicoFind)
// })

routesMedico.get('/medico/search', async (req, res) => {
    const { nome, especialidade } = req.query
    let searchMedico 
    if(nome) {
       searchMedico = await pesqPorNome(nome)
    } else if(especialidade) {
        searchMedico = await pesqPorEspecialidade(especialidade)
    }
    if(searchMedico) {
        return res.status(200).send(searchMedico)
    } else {
        return res.status(404).send({ message: 'medico não encontrado' })
    }
})

export { routesMedico }