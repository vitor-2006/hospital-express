import mongoose from "mongoose";

const MedicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    }
})

export const Medico = mongoose.model('medicos', MedicoSchema)