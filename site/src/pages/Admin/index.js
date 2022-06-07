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
export default function Admin() {
    const [usuario, setUsuario] = useState('')

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

                    <option value="Data">Data</option>
                    <option value="Nome">Nome</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Horário">Horário</option>
                    
                </select>
                </section>
            
                <input className="ftl" type="text" placeholder='Insira sua pesquisa'/>

            

            <br/>

                <div className="cards">
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

                <div className="cards2">
                    <div className="info1">
                    <p>José Leleco</p>
                    <p className='numero'>(11) 97839-9023</p>
                    <p className='tipo'>joséleleco@gmail.com</p>
                    </div>
                    <div className="info2-2">
                        <p className="data">Data: 16/06/2022</p>
                        <p>Horário: 15:30</p>
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

                <div className="cards2">
                    <div className="info1">
                    <p>Érica Silva</p>
                    <p className='numero'>(11) 99823-0921</p>
                    <p className='tipo'>éricasilva@gmail.com</p>
                    </div>
                    <div className="info2-3">
                        <p className="data">Data: 06/07/2022</p>
                        <p>Horário: 18:30</p>
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

                <div className="cards2">
                    <div className="info1">
                    <p>Letícia Damasceno</p>
                    <p className='numero'>(11) 93344-2371</p>
                    <p className='tipo'>letíciadamasceno@gmail.com</p>
                    </div>
                    <div className="info2-4">
                        <p className="data">Data: 23/07/2022</p>
                        <p>Horário: 16:30</p>
                        <p className='tipo'>Tipo: Online</p>
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

                <div className="cards2">
                    <div className="info1">
                    <p>Adamastor Gonçalves</p>
                    <p className='numero'>(11) 96666-6666</p>
                    <p className='tipo'>adamastorgonçalves@gmail.com</p>
                    </div>
                    <div className="info2-5">
                        <p className="data">Data: 02/08/2022</p>
                        <p>Horário: 12:30</p>
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
        
                <br/>

        </main>

    </body>

    )
    
}