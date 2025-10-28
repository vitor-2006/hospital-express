import { Consulta } from "./schema.js"

export const deleteConsulta = async (id) => {
    try {
        return await Consulta.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Consulta:', error.message)
        throw error
    }
}

export const deleteConsultaPorMedico = async (idMedico) => {
    try {
        return await Consulta.deleteMany({ idMedico: idMedico })
    } catch (error) {
        console.error('Erro ao deletar Consulta:', error.message)
        throw error
    }
}

export const deleteConsultaPorPaciente = async (idPaciente) => {
    try {
        return await Consulta.deleteMany({ idPaciente: idPaciente })
    } catch (error) {
        console.error('Erro ao deletar Consulta:', error.message)
        throw error
    }
}