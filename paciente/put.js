import { Paciente } from "./schema.js"

export const updatePaciente = async (nome, dataNascimento) => {
    try {
        const updatedPaciente = await Paciente.findByIdAndUpdate(
            id,
            {nome, dataNascimento },
            { new:true, runValidators:true }
        )
        return updatedPaciente
    } catch (error) {
        console.error('Erro ao atualizar o Paciente:', error.message)
        throw error
    }
}