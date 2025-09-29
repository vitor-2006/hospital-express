import { Consulta } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
export const pesqPorData = async (data) => {
    try {
      const safeData = escapeRegex(data);
      console.log(safeData)
      return await Consulta.find({ data: { $regex: safeData, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Consulta', error.message);
      throw error;
    }
}

export const pesqPorDescrisao = async (descrisao) => {
    try {
      const safeDescrisao = escapeRegex(descrisao);
      return await Consulta.find({ descrisao: { $regex: safeDescrisao, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Consulta', error.message);
      throw error;
    }
}

export const pesqPorIdMedico = async (idMedico) => {
    try {
      const safeIdMedico = escapeRegex(idMedico);
      return await Consulta.find({ idMedico: { $regex: safeIdMedico, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Consulta', error.message);
      throw error;
    }
}

export const pesqPorIdPaciente = async (idPaciente) => {
    try {
      const safeIdPaciente = escapeRegex(idPaciente);
      return await Consulta.find({ idPaciente: { $regex: safeIdPaciente, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Consulta', error.message);
      throw error;
    }
}