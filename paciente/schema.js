import mongoose from "mongoose";

const PacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    }
})

export const Paciente = mongoose.model('pacientes', PacienteSchema)