import './index.scss';
import './style-320.scss';
import './style-360.scss';
import './style-568.scss';
import './style-768.scss';
import './style-800.scss';
import './style-880.scss';
import './style-960.scss';
import './style-1080.scss';
import './style-1140.scss';
import './style-1280.scss';
import './style-1366.scss';
import './style-1440.scss';
import './style-1680.scss';
import './style-1780.scss';
import './style-1920.scss';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import {listarPorNome, deletarAgendamento, BuscarDeHoje, buscarImagem} from '../../api/agendamentoApi.js'
export default function Admin() {
    const [usuario, setUsuario] = useState('');
    const [filtroNome, setFiltroNome] = useState('');
    const [consulta, setConsultas] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        ConsultasHoje();

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


    async function ConsultasHoje(){
        const resposta = await BuscarDeHoje();
        console.log(resposta)
        setConsultas(resposta);

    }

    async function filtrarPorNome(){
        const resposta = await listarPorNome(filtroNome);
        setConsultas(resposta);
        
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
                              ConsultasHoje();
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
        navigate(`/admin/alterar/${id}`)
    }
    
    document.addEventListener("keypress", function  (e) {
        if(e.key === "Enter"){
            const btn = document.querySelector("#send");
            btn.click();
        }
    })

    return(  

    <body className='bd-Admin-hoje'>
        <ToastContainer />
        <Helmet title='Consultas'/> 
        <header> 
            <Link to="/">
            <img className="logo" src="../images/Dental_Hioki__1_-removebg-preview.png"/>
            </Link>

            <h5 className="seja-bem">Seja bem vindo, {usuario}!</h5>
        <div className='botoes'>
             <button className="botao-sair" onClick={sairClick}>Sair</button>
            <Link className="botao-agendar" to="/cadastro">Novo Agendamento</Link>
            <Link className="botao-voltar" to="/admin">Voltar para o Histórico</Link>
            </div>
            
        </header>

        <br/> <br/>

        <main>
            <h1 className="consultas">Consultas de hoje</h1>
            
            <div>
            <input className="ftl" id="name" type="text" placeholder='Insira o nome do paciente' value={filtroNome} onChange={e => setFiltroNome(e.target.value)}/>
            <img className="lupa"  id= "send" type="submit" src='/images/search-free-icon-font.svg'  onClick={filtrarPorNome}/>

                </div>

            <br/>

               
                    {consulta.map(item => 
                <div className='todos'>
                    <div className='cards'>
                        <div className="info1">
                        <p>{item.nome}</p>
                        <p className='numero'>{item.telefone}</p>
                        <p className='tipo'>{item.email}</p>
                        </div>
                        <div className="info2">
                            <p className="data">Data: {item.data.substr(0,10)}</p>
                            <p>Horário: {item.horário.substr(0,5)}</p>
                            <p className='tipo'>Tipo: {item.tipo}</p>
                        </div>
                        <div className='quadrado-foto'>
                                <img className='foto-adm' src={buscarImagem(item.foto)}></img>
                            </div>
                        <div className="acoes">
                        <img className="delete" src="/images/delete.png" onClick={() => removerAgendamentoClick(item.id, item.nome)}></img>
                        <img className="edit"src="/images/edit-button.png" onClick={() => editarAgendamento(item.id)}></img>
                        </div>
                    </div>
                 </div>
                        )}
                   

                    
           

        
                <br/>

        </main>

    </body>

    )
    
}