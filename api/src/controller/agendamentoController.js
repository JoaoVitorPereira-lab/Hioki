import { Router } from "express";
import {inserirAgendamento, ConsultarTodos, alterarAgendamento, removerAgendamento, ListarporNome, ListarporData, ListarporHorario, ListarporTipo} from '../repository/agendamentoRepository.js'

const server = Router();

//Adicionar um Agendamento
server.post('/agendamento', async (req, resp) => {
    try{
        const novoAgendamento = req.body;

        if(!novoAgendamento.nome){
            throw new Error('Nome do paciente é obrigatório!');
        }

        if(!novoAgendamento.email){
            throw new Error('Email do paciente é obrigatório!');
        }

        if(!novoAgendamento.telefone){
            throw new Error('Telefone do paciente é obrigatório!');
        }

        if(!novoAgendamento.horário){
            throw new Error('Horário da consulta é obrigatória!');
        }

        if(!novoAgendamento.data){
            throw new Error('Data da consulta é obrigatória!');
        }
        if(!novoAgendamento.tipo){
            throw new Error('Tipo da consulta é obrigatório!');
        }

        if(!novoAgendamento.usuário){
            throw new Error('Usuário não logado!');
        }

        const filme =  await inserirAgendamento(novoAgendamento);
        resp.send(filme)
    } 
    catch(err){
        resp.send({
            erro:err.message
        })

    }
})
//Consultar todos Agendamentos
server.get('/agendamento', async (req, resp) => {
    try{
        const resposta = await ConsultarTodos();
        resp.send(resposta) 
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})
//Alterar um agendamento
server.put('/agendamento/:id', async (req, resp) => {
    try{
        const agendamento = req.body
        const {id} = req.params;

        if(!agendamento.nome){
            throw new Error('Nome do paciente é obrigatório!');
        }

        if(!agendamento.email){
            throw new Error('Email do paciente é obrigatório!');
        }

        if(!agendamento.telefone){
            throw new Error('Telefone do paciente é obrigatório!');
        }

        if(!agendamento.horário){
            throw new Error('Horário da consulta é obrigatória!');
        }

        if(!agendamento.data){
            throw new Error('Data da consulta é obrigatória!');
        }
        if(!agendamento.tipo){
            throw new Error('Tipo da consulta é obrigatório!');
        }


        const resposta =  await alterarAgendamento(id, agendamento);
        if(resposta != 1)
            throw new Error('Agendamento não pode ser alterado')
        else
            resp.sendStatus(204)
    } 
    catch(err){
        resp.send({
            erro:err.message
        })

    }
})
//Deletar um agendamento
server.delete('/agendamento/:id', async (req,resp) =>{
    try{
        const {id} = req.params;
        const resposta = await removerAgendamento(id)

        if(resposta != 1){
            throw new Error('Agendamento não pode ser removido')
        }
    resp.status(204).send();
    } 
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})
//Listar por Data
server.get('/agendamento/buscar/data', async(req, resp) => {
    try{
    const {dt} = req.query;

    const resposta = await ListarporData(dt)
    if(!resposta){
        resp.status(404).send([])
    }
    else{
    resp.send(resposta)
}
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})
//Listar por Nome
server.get('/agendamento/buscar/nome', async(req, resp) => {
    try{
    const {nm} = req.query;

    const resposta = await ListarporNome(nm)
    if(!resposta){
        resp.status(404).send([])
    }
    else{
    resp.send(resposta)
}
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})
//Listar por Horário
server.get('/agendamento/buscar/horario', async(req, resp) => {
    try{
    const {hr} = req.query;

    const resposta = await ListarporHorario(hr)
    if(!resposta){
        resp.status(404).send([])
    }
    else{
    resp.send(resposta)
}
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})
//Listar por Tipo da Consulta
server.get('/agendamento/buscar/consulta', async(req, resp) => {
    try{
    const {tp} = req.query;

    const resposta = await ListarporTipo(tp)
    if(!resposta){
        resp.status(404).send([])
    }
    else{
    resp.send(resposta)
}
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})

export default server;