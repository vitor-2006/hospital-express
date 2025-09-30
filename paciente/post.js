import { Paciente } from "./schema.js"
import { verificarDataEstrutura } from "../consulta/pesquisa.js"

export const createPaciente = async (nome, dataNascimento) => {
    try {
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const newPaciente = new Paciente({nome, dataNascimento})
        return await newPaciente.save()
    } catch (error) {
        console.error('Erro ao criar Paciente', error.message)
        throw error
    }
}