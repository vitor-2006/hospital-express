import { Paciente } from "./schema.js"

export const createPaciente = async (nome, dataNascimento) => {
    try {
        const newPaciente = new Paciente({nome, dataNascimento})
        return await newPaciente.save()
    } catch (error) {
        console.error('Erro ao criar Paciente', error.message)
        throw error
    }
}