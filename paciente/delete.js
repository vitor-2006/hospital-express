import { Paciente } from "./schema.js"
import {deleteConsultaPorPaciente} from '../consulta/delete.js'

export const deletePaciente = async (id) => {
    try {
        deleteConsultaPorPaciente(id)
        return await Paciente.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Paciente:', error.message)
        throw error
    }
}