import { Medico } from "./schema.js"

export const updateMedico = async (nome, especialidade) => {
    try {
        const updatedMedico = await Medico.findByIdAndUpdate(
            id,
            {nome, especialidade },
            { new:true, runValidators:true }
        )
        return updatedMedico
    } catch (error) {
        console.error('Erro ao atualizar o Medico:', error.message)
        throw error
    }
}