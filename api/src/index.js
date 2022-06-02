import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usercontrol from './controller/usuariocontroller.js'
import agndcontrol from './controller/agendamentoController.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(usercontrol);
server.use(agndcontrol);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));