import './index.scss';
import './style-320.scss';
import './style-400.scss';
import './style-561.scss';
import './style-602.scss';
import './style-800.scss';
import './style-1020.scss';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import {listarTodosAgendamentos, listarPorNome, listarPorData, listarPorTipo, listarPorHorario, deletarAgendamento} from '../../api/agendamentoApi.js'
export default function Admin() {
    const [usuario, setUsuario] = useState('');
    const [filtroNome, setFiltroNome] = useState('');
    const [agendamento, setAgendamento] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        carregarTodosAgendamentos();

        if (!storage('usuario-logado')){
            navigate('/login')
        }
        else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nomedoutor)
        }
    }, [])



    function sairClick(){   

        storage.remove('usuario-logado');
        navigate('/login');
    }


    async function carregarTodosAgendamentos(){
        const resposta = await listarTodosAgendamentos();
        setAgendamento(resposta);

    }

    async function filtrarPorNome(){
        const resposta = await listarPorNome(filtroNome);
        setAgendamento(resposta);
    }

    async function removerAgendamentoClick(id, nome) {

        confirmAlert({
            title:'Remover agendamento',
            message:`Deseja remover o agendamento de ${nome} ?`,
            buttons:[
                {
                    label:'Sim',
                    onClick: async () => {
                const resposta = await deletarAgendamento(id, nome);
                    if(filtroNome  === '')
                              carregarTodosAgendamentos();
                    else
                            filtrarPorNome();
                                    toast.success('Agendamento removido com sucesso')
                    }
                    
                },
                {
                    label:'Não'
                }
            ]


        })


        

    }

    async function editarAgendamento(id){
        navigate(`alterar/${id}`)
    }

    return(  

    <body className='bd-Admin'>
        <ToastContainer />
        <Helmet title='Admin'/> 
        <header> 
            <Link to="/">
            <img className="logo" src="../images/Dental_Hioki__1_-removebg-preview.png"/>
            </Link>

            <h5 className="seja-bem">Seja bem vindo, {usuario}!</h5>
        <div className='botoes'>
             <button className="botao-sair" onClick={sairClick}>Sair</button>
            <Link className="botao-agendar" to="/cadastro">Novo Agendamento</Link>
            </div>
            
        </header>

        <br/> <br/>

        <main>
            <h1 className="consultas">Consultas Marcadas</h1>
            <section className="filtros">

                <label className="filtrin">Selecione uma filtragem:</label>

                <select className="filtragem">
                    <option value="Nome">Nome</option>
                    <option value="Data">Data</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Horário">Horário</option>
                    
                </select>
                </section>
            <div>
                <input className="ftl" type="text" placeholder='Insira sua pesquisa' value={filtroNome} onChange={e => setFiltroNome(e.target.value)}/>
                <img className="lupa" src='../images/search-free-icon-font.svg' onClick={filtrarPorNome}/>

                </div>

            <br/>

               
                    {agendamento.map(item => 
                <div className='todos'>
                    <div className='cards'>
                        <div className="info1">
                        <p>{item.nome}</p>
                        <p className='numero'>{item.telefone}</p>
                        <p className='tipo'>{item.email}</p>
                        </div>
                        <div className="info2">
                            <p className="data">Data: {item.data.substr(0,10)}</p>
                            <p>Horário: {item.horário}</p>
                            <p className='tipo'>Tipo: {item.tipo}</p>
                        </div>
                        <div className="acoes">
                        <img className="delete" src="../images/delete.png" onClick={() => removerAgendamentoClick(item.id, item.nome)}></img>
                        <img className="edit"src="../images/edit-button.png" onClick={() => editarAgendamento(item.id)}></img>
                        </div>
                    </div>
                 </div>
                        )}
                   

                    
           

        
                <br/>

        </main>

    </body>

    )
    
}