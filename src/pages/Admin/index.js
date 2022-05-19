import './index.scss';
import './style-320.scss';
import './style-400.scss';
import './style-561.scss';
import './style-602.scss';
import './style-800.scss';
import './style-1020.scss';


export default function Admin() {

    return(  

    <body className='bd-Admin'>

        <header>

            <img className="logo" src="../images/Dental_Hioki__1_-removebg-preview.png"/>

            <h5 className="seja-bem">Seja bem vindo, Bruno</h5>

            <a className="agend" href="../cadastro">Novo Agendamento</a>
            
        </header>

        <br/> <br/>

        <main>

            <section className="filtros">

                <label>Selecione uma filtragem:</label>

                <select className="filtragem">

                    <option value="Data">Data</option>
                    <option value="Nome">Nome</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Horário">Horário</option>
                    
                </select>
            
                <input className="ftl" type="text"/>

            </section>

            <br/>

            <table>
                
                <th>Data</th>
                <th>Nome</th>
                <th>Consulta</th>
                <th>Horário</th>
                <th>Ações</th>
                
                <tbody>
                    <td>21/04</td>
                        <td>Thomas Mirinely</td> 
                        <td>On-line</td>
                        <td>10:00</td>
                        <td>
                            <img className="edit" src="../images/edit-button.png"/>
                            <img className="delete" src="../images/delete.png"/>
                            <input className="confirma" type="checkbox"/>
                    </td>

                <tr>

                    <td>21/04</td>
                    <td>Fernando Duarte</td>
                    <td>On-line</td>
                    <td>10:30</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                    
                </tr>

                <tr>
                    <td>21/04</td>
                    <td>Christian Coachman</td>
                    <td>On-line</td>
                    <td>11:00</td>
                    <td> <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>

                <tr>
                
                    <td>21/04</td>
                    <td>Rafael Puglisi</td>
                    <td>Presencial</td>
                    <td>11:45</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>

                </tr>
                <tr>
                    <td>21/04</td>
                    <td>Dan Fischer</td>
                    <td>Presencial</td>
                    <td>14:00</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>27/04</td>
                    <td>Ronaldo Hirata</td>
                    <td>Presencial</td>
                    <td>14:30</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>    
                <tr>
                    <td>20/04</td>
                    <td>Per-Ingvar Branemark</td>   
                    <td>On-line</td> 
                    <td>15:00</td>    
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>        
                </tr>
                <tr>
                    <td>28/04</td>
                    <td>Paulo Moraes</td>
                    <td>Presencial</td>
                    <td>15:30</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>29/05</td>
                    <td>Aristóteles de Assis</td>
                    <td>On-line</td>
                    <td>16:00</td> 
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>30/04</td>
                    <td>Claúdio Pereira</td>
                    <td>Presencial</td>
                    <td>16:30</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                
                <tr>
                    <td>01/04</td>
                    <td>Victor Nunes</td>
                    <td>Presencial</td>
                    <td>17:00</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                <tr>
                    <td>03/05</td>
                    <td>Guilherme Messias</td>
                    <td>On-line</td>
                    <td>17:30</td> 
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                
                </tr>
                <tr>
                    <td>03/05</td>
                    <td>João Vinicius</td>
                    <td>Presencial</td>
                    <td>18:00</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                </tr>
                    <td>03/05</td>
                    <td>Jair Martins</td>
                    <td>Presencial</td>
                    <td>18:30</td>
                    <td>
                        <img className="edit" src="../images/edit-button.png"/>
                        <img className="delete" src="../images/delete.png"/>
                        <input className="confirma" type="checkbox"/>
                    </td>
                <tr>

                </tr>
                </tbody>
                </table>
        
                <br/>

        </main>

    </body>

    )
    
}