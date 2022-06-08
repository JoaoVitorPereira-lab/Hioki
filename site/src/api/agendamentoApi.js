import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAgendamento(nome, email, telefone, data, horário, tipo, usuário){

    const resposta = await api.post('/agendamento', {
       
        nome: nome,
        email: email,
        telefone: telefone,
        horário: horário,
        data: data,
        tipo: tipo,
        usuário: usuário
    })
    return resposta.data;

}

export async function alterarAgendamento(id, nome, email, telefone, data, horário, tipo, usuário){

    const resposta = await api.put(`/agendamento/${id}`, {
       
        nome: nome,
        email: email,
        telefone: telefone,
        horário: horário,
        data: data,
        tipo: tipo,
        usuário: usuário
    })
    return resposta.data;

}

export async function listarTodosAgendamentos(){
    const resposta = await api.get('/agendamento');
    return resposta.data;
} 

export async function listarPorNome(nome){
    const resposta = await api.get(`/agendamento/buscar/nome?nm=${nome}`);
    return resposta.data;
} 

export async function listarPorData(data){
    const resposta = await api.get(`/agendamento/buscar/data?dt=${data}`);
    return resposta.data;
} 

export async function listarPorHorario(horario){
    const resposta = await api.get(`/agendamento/buscar/horario?hr=${horario}`);
    return resposta.data;
} 

export async function listarPorTipo(tipo){
    const resposta = await api.get(`/agendamento/buscar/consulta?tp=${tipo}`);
    return resposta.data;
} 