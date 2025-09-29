import { Medico } from "./schema.js"

export const getMedico = async () => {
    try {
        return await Medico.find()
    } catch (error) {
        console.log('erro ao buscar os Medicos', error.message)
        throw error
    }
}