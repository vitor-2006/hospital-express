import express from 'express'
import { routesPaciente } from './paciente/routesPaciente.js';
import { routesMedico } from './medico/routesMedico.js';
import { routesConsulta } from './consulta/routesConsulta.js';
import { routesRelatorio } from './relatorios/routesRelatorios.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesPaciente)
app.use(routesMedico)
app.use(routesConsulta)
app.use(routesRelatorio)

app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});