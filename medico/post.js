import { Medico } from "./schema.js"

export const createMedico = async (nome, especialidade) => {
    try {
        const newMedico = new Medico({nome, especialidade})
        return await newMedico.save()
    } catch (error) {
        console.error('Erro ao criar Medico', error.message)
        throw error
    }
}
