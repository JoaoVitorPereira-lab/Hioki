import './index.scss';
import './style-320.scss';
import './style-400.scss';
import './style-561.scss';
import './style-602.scss';
import './style-800.scss';
import './style-1020.scss';

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

                    <div className="online">
                        <botton className="on">ONLINE</botton>&nbsp; <div className="t2"></div> &nbsp; <botton className="on2">PRESENCIAL</botton>
                    </div>

                    <div className="confirm"> 
                        <input className="caixita" type="checkbox"/>
                        <div className="confirmacaotxt">Eu confirmo o agendamento dessa consulta</div>
                    </div>&nbsp;
                    <a href="../landing-page" className="agend">AGENDAR</a>
            </div>
            </div>

        </section>

        
    </body>
    )
}