import express from "express"

let paciente = []
let idGen = 1000

const routesPaciente = express.Router()

routesPaciente.get('/paciente', (req, res) => {
    return res.json(paciente);
});

routesPaciente.post('/paciente', (req, res) => {
    const novoPaciente = 
        {
        'nome': req.body.nome,
        'dataNascimento': req.body.dataNascimento,
        'id': idGen
        }
    idGen++
    paciente.push(novoPaciente)
    return res.status(201).send('Paciente registrado!')
})

routesPaciente.put('/paciente/:id', (req, res) => {
    const { id } = req.params
    paciente.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.nome = update.nome
            element.dataNascimento = update.dataNascimento
            return res.send("Paciente editado com sucesso!")
        }
    })
    return res.send("Paciente não encontrado!")
})

routesPaciente.delete('/paciente/:id', (req, res) => {
    const { id } = req.params
    const pacienteFind = paciente.findIndex((element) => element.id == id)

    if(pacienteFind !== -1){
        paciente.splice(pacienteFind, 1)
        return res.send('Paciente removido!')
    }
    return res.send("Paciente não encontrado")
})

routesPaciente.get('/paciente/', (req, res) => {
    const { nome } = req.query
    const pacienteFind = paciente.find((element) => {
        if(element.nome.toLowerCase().trim() === nome.toLowerCase().trim()){
            return element
        }
    })
    return res.send(pacienteFind)
})

routesPaciente.get('/paciente/', (req, res) => {
    const { dataNascimento } = req.query
    console.log(dataNascimento)
    const pacienteFind = paciente.find((element) => {
        if(element.dataNascimento === dataNascimento){
            return element
        }
    })
    return res.send(pacienteFind)
})

export { routesPaciente, paciente}