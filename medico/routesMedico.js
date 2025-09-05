import express from "express"

let medico = []
let idGen = 100

const routesMedico = express.Router()

routesMedico.get('/medico', (req, res) => {
    return res.json(medico);
});

routesMedico.post('/medico', (req, res) => {
    const novomedico = 
        {
        'nome': req.body.nome,
        'especialidade': req.body.especialidade,
        'id': idGen
        }
    idGen++
    medico.push(novomedico)
    return res.status(201).send('Medico registrado!')
})

routesMedico.put('/medico/:id', (req, res) => {
    const { id } = req.params
    medico.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.nome = update.nome
            element.especialidade = update.especialidade
            return res.send("Medico editado com sucesso!")
        }
    })
    return res.send("Medico não encontrado!")
})

routesMedico.delete('/medico/:id', (req, res) => {
    const { id } = req.params
    const medicoFind = medico.findIndex((element) => element.id == id)

    if(medicoFind !== -1){
        medico.splice(medicoFind, 1)
        return res.send('Medico removido!')
    }
    return res.send("Medico não encontrado")
})

routesMedico.get('/medico/', (req, res) => {
    const { nome } = req.query
    const medicoFind = medico.find((element) => {
        if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
            return element
        }
    })
    return res.send(medicoFind)
})

routesMedico.get('/medico/', (req, res) => {
    const { especialidade } = req.query
    const medicoFind = medico.find((element) => {
        if(element.especialidade.toLowerCase().trim() === especialidade.toLowerCase().trim()){
            return element
        }
    })
    return res.send(medicoFind)
})


export { routesMedico, medico }