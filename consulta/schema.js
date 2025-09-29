import mongoose from "mongoose";

const ConsultaSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    descrisao: {
        type: String,
        required: false
    },
    idMedico: {
        type: String,
        required: true
    },
    idPaciente: {
        type: String,
        required: true
    }
})

export const Consulta = mongoose.model('consulta', ConsultaSchema)