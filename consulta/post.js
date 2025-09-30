import { Consulta } from "./schema.js"
import { verificPorIdMedico } from "../medico/pesquisa.js"
import { verificPorIdPaciente } from "../paciente/pesquisa.js"

export const createConsulta = async (data,  descrisao, idMedico, idPaciente) => {
    try {
        const arrayPaciente = await verificPorIdMedico(idMedico)
        const arrayMedico = await verificPorIdPaciente(idPaciente)
        if(arrayPaciente.length === 0 || arrayMedico.length === 0) {
            return false
        }
        const newConsulta = new Consulta({data, descrisao, idMedico, idPaciente})
        return await newConsulta.save()
    } catch (error) {
        console.error('Erro ao criar consulta', error.message)
        throw error
    }
}
