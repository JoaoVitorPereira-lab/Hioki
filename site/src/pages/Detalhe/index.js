import './index.scss';
import './style-320.scss';
import './style-360.scss';
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
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import storage from 'local-storage'
import { useEffect,  useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-confirm-alert/src/react-confirm-alert.css';

import {} from '../../api/agendamentoApi.js'
export default function Admin() {
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        

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



    




    return(  

    <body className='bd-Detalhe'>
        <ToastContainer />
        <Helmet title='Admin'/> 
        <header> 
            <Link to="/">
            <img id="imagem"className="logo" src="/images/Dental_Hioki__1_-removebg-preview.png"/>
            </Link>

            <h5 className="seja-bem">Seja bem vindo, {usuario}!</h5>
        <div className='botoes'>
             <button className="botao-sair" onClick={sairClick}>Sair</button>
            <Link className="botao-agendar" to="/cadastro">Novo Agendamento</Link>
            <Link className="botao-consultas" to="/consultas/hoje">Consultas de Hoje</Link>
            </div>
            
        </header>

        <br/> <br/>

        <main>
            <h1 className="consultas">Detalhes da consulta de </h1>

        <div className="detalhes">
            <div>
            <img className="img-detalhes" src ="/images/BUBA.png"></img>
                </div>

                <div className="info-detalhes">
                    <h3>Nome</h3>
                    <p>Jacenir</p>

                    <h3>Email</h3>
                    <p>jacenir@gmail.com</p>

                    <h3>Telefone</h3>
                    <p>(11) 93344-2371</p>

                    <h3>Data</h3>
                    <p>21/06/2022</p>

                    <h3>Horário</h3>
                    <p>15:30</p>

                    <h3>Tipo</h3>
                    <p>Presencial</p>

                    
                </div>


        </div>
            <br/>

               
                

        </main>

    </body>

    )
    
}