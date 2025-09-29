import { Consulta } from "./schema.js"

export const createConsulta = async (data,  descrisao, idMedico, idPaciente) => {
    try {
        const newConsulta = new Consulta({data, descrisao, idMedico, idPaciente})
        return await newConsulta.save()
    } catch (error) {
        console.error('Erro ao criar consulta', error.message)
        throw error
    }
}
