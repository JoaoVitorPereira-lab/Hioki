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

import {listarTodosAgendamentos, listarPorNome, listarPorData, listarPorTipo, listarPorHorario} from '../../api/agendamentoApi.js'
export default function Admin() {
    const [usuario, setUsuario] = useState('');
    const [agendamento, setAgendamento] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        listarTodosAgendamentos();

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

    async function carregarTodosFilmes(){
        const resposta = await listarTodosAgendamentos();
        console.log(resposta);
        setAgendamento(resposta);

    }

    return(  

    <body className='bd-Admin'>
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
            
                <input className="ftl" type="text" placeholder='Insira sua pesquisa'/>
                <img className="lupa" src='../images/search-free-icon-font.svg'/>

            

            <br/>

                <div className="cards">
                    {agendamento.map(item => 
                    <div>
                        <div className="info1">
                        <p>Juliano Siqueira</p>
                        <p className='numero'>(11) 95049-8855</p>
                        <p className='tipo'>julianosiqueira@gmail.com</p>
                        </div>
                        <div className="info2">
                            <p className="data">Data: 13/06/2022</p>
                            <p>Horário: 16:30</p>
                            <p className='tipo'>Tipo: Presencial</p>
                        </div>
                        <div className="acoes">
                            <Link to ="/cadastro">
                        <img className="delete" src="../images/delete.png"></img>
                        </Link>
                        <Link to="/cadastro">
                        <img className="edit"src="../images/edit-button.png"></img>
                        </Link>
                        </div>
                    </div>
                        )}
                   

                    
                </div>

        
                <br/>

        </main>

    </body>

    )
    
}