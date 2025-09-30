import { Consulta } from "./schema.js"
import { verificPorIdPaciente } from "../paciente/pesquisa.js"
import { verificPorIdMedico } from "../medico/pesquisa.js"

export const updateConsulta = async (data, descrisao, idMedico, idPaciente) => {
    try {
        const arrayPaciente = verificPorIdMedico(idMedico)
        const arrayMedico = verificPorIdPaciente(idPaciente)
        if(!arrayPaciente || !arrayMedico) {
            return false
        }
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const updatedConsulta = await Consulta.findByIdAndUpdate(
            id,
            {data, descrisao, idMedico, idPaciente },
            { new:true, runValidators:true }
        )
        return updatedConsulta
    } catch (error) {
        console.error('Erro ao atualizar a Consulta:', error.message)
        throw error
    }
}