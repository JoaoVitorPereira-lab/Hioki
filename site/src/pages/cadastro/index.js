import './index.scss'
import './style-320.scss';
import './style-400.scss';
import './style-561.scss';
import './style-602.scss';
import './style-800.scss';
import './style-1020.scss'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'
import storage from 'local-storage'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cad() {

    const navigate = useNavigate()
    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/login')
        }
    }, [])

    return(
    
    <body className='bd-cad'>
        <Helmet title='Novo agendamento'/>

        <section className="cadastre">
            
            <div className="quadrado">

                <div className="txt1">AGENDE UMA CONSULTA DE UM PACIENTE</div>
                
                <div className="caixas">

                <div className="cx1">
                    <img className="user" src="../images/user.png" alt=""/> &nbsp;NOME 
                    <div className="t"> </div> 
                    
                    <input required="" className="caixatxt" placeholder='Insira o nome do paciente'/> 
                </div>
                
                <br/>

                <div className="cx2">
                    <img className="mail" src="../images/mail.png" alt=""/>&nbsp;EMAIL
                    <div className="t"> </div> 
                    
                    <input className="caixatxt2" placeholder='Insira o email do paciente'/> 
                </div>

                <br/>

                <div className="cx3"> 
                    <img className="tel" src="../images/telephone-call.png" alt=""/>&nbsp;TELEFONE
                    <div className="t"> </div> 
                    
                    <input type="tel" id="Telefone" name="Telefone" placeholder="(99) 99999-9999"  className="caixatxt3"/>
                </div>

                <br/>

                <div className="cx4">
                    <img className="calendar" src="../images/calendar.png" alt=""/>&nbsp;DATA
                    <div className="t"> </div> 
                    
                    <input type="date" id="data" name="data" className="caixatxt4"/> 
                    
                </div>

                    <div className="cx5">
                        <img className="clock" src="../images/clock.png" alt=""/>&nbsp;HORÁRIO
                        <div className="t"> </div> 
                    
                    <input type="time" className="caixatxt5"/>
                    </div>
                    <br/>

                <div className='escolha'>
                <div className="cx6">
                    <img className="user" src="../images/user.png" alt=""/> &nbsp;TIPO
                    <div className="t"> </div> 
                    
                    <input required="" className="caixatxt6" placeholder='Online ou Presencial'/> 
                </div>
                   
                        </div>


                    <Link to="/Admin" className="agend">AGENDAR</Link>
            </div>
            </div>

        </section>

        
    </body>
    )
}