import { Paciente } from "./schema.js"

export const getPaciente = async () => {
    try {
        return await Paciente.find()
    } catch (error) {
        console.log('erro ao buscar os Pacientes', error.message)
        throw error
    }
}