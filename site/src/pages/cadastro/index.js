import './index.scss'
import './style-320.scss';
import './style-400.scss';
import './style-561.scss';
import './style-602.scss';
import './style-800.scss';
import './style-1020.scss'

import {Link} from 'react-router-dom'
export default function Cad() {

    return(
    
    <body className='bd-cad'>

        <section className="cadastre">
            
            <div className="quadrado">

                <div className="txt1">AGENDE UMA CONSULTA DE UM PACIENTE</div>
                
                <div className="caixas">

                <div className="cx1">
                    <img className="user" src="../images/user.png" alt=""/> &nbsp;NOME 
                    <div className="t"> </div> 
                    
                    <input required="" className="caixatxt"/> 
                </div>
                
                <br/>

                <div className="cx2">
                    <img className="mail" src="../images/mail.png" alt=""/>&nbsp;EMAIL
                    <div className="t"> </div> 
                    
                    <input className="caixatxt2"/> 
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

                <div className='escolha'>
                    <div className="online1">
                        <botton className="on">ONLINE</botton>
                        </div>
                        <div className='online2'>
                        <botton className="on2">PRESENCIAL</botton>
                        </div>
                   
                        </div>


                    <div className="confirm"> 
                        <input className="caixita" type="checkbox"/>
                        <div className="confirmacaotxt">Eu confirmo o agendamento dessa consulta</div>
                    </div>&nbsp;
                    <Link to="/Admin" className="agend">AGENDAR</Link>
            </div>
            </div>

        </section>

        
    </body>
    )
}