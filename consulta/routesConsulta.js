import express from "express"

let consulta = []
let idGen = 1

const routesConsulta = express.Router()

routesConsulta.get('/consulta', (req, res) => {
    return res.json(consulta);
});

routesConsulta.post('/consulta', (req, res) => {
    const novaConsulta = 
        {
        'data': req.body.data,
        'descrisao': req.body.descrisao,
        'idMedico': req.body.idMedico,
        'idPaciente': req.body.idPaciente,
        'id': idGen
        }
    idGen++
    consulta.push(novaConsulta)
    return res.status(201).send('Consulta registrada!')
})

routesConsulta.put('/consulta/:id', (req, res) => {
    const { id } = req.params
    consulta.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.data = update.data
            element.descrisao = update.descrisao
            element.idMedico = update.idMedico
            element.idPaciente = update.idPaciente
            return res.send("Consulta editada com sucesso!")
        }
    })
    return res.send("Consulta não encontrada!")
})

routesConsulta.delete('/consulta/:id', (req, res) => {
    const { id } = req.params
    const consultaFind = consulta.findIndex((element) => element.id == id)

    if(consultaFind !== -1){
        consulta.splice(consultaFind, 1)
        return res.send('Consulta removida!')
    }
    return res.send("Consulta não encontrada")
})

routesConsulta.get('/consulta/', (req, res) => {
    const { data } = req.query
    const consultaFind = consulta.find((element) => {
        if(element.data === data){
            return element
        }
    })
    return res.send(consultaFind)
})

routesConsulta.get('/consulta/', (req, res) => {
    const { descrisao } = req.query
    const consultaFind = consulta.find((element) => {
        if(element.descrisao.toLowerCase().trim() === descrisao.toLowerCase().trim()){
            return element
        }
    })
    return res.send(consultaFind)
})

routesConsulta.get('/consulta/', (req, res) => {
    const { IdPaciente } = req.query
    const consultaFind = consulta.find((element) => {
        if(element.IdPaciente === IdPaciente){
            return element
        }
    })
    return res.send(consultaFind)
})

routesConsulta.get('/consulta/', (req, res) => {
    const { IdMedico } = req.query
    const consultaFind = consulta.find((element) => {
        if(element.IdMedico === IdMedico){
            return element
        }
    })
    return res.send(consultaFind)
})

export { routesConsulta, consulta }