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

export const verificarDataEstrutura = async(data) => {
  // Verifica se a data foi fornecida
  if (!data) {
      return false;
  }

  const dataArray = data.split("-");

  // Garante que a data tem 3 partes (ano, mês, dia)
  if (dataArray.length !== 3) {
      return false;
  }

  const [ano, mes, dia] = dataArray;

  // Valida o ano: deve ter 4 dígitos e ser um número
  if (ano.length !== 4 || isNaN(parseInt(ano))) {
      return false;
  }
  // Valida o mês: deve ter 1 ou 2 dígitos e ser um número
  if (mes.length > 2 || mes.length === 0 || isNaN(parseInt(mes))) {
      return false;
  }
  // Valida o dia: deve ter 1 ou 2 dígitos e ser um número
  if (dia.length > 2 || dia.length === 0 || isNaN(parseInt(dia))) {
      return false;
  }

  // Se todas as verificações passaram, a data tem um formato válido
  return true;
}
