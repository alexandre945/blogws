
import express from 'express';
import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import { routes } from "./router/routes";
const app = express();


// usando template engine
app.set('view engine', 'ejs')

// Mudar a localização da pasta views
app.set('views', path.join(__dirname, 'views'))


//habilitar arquivos statics
app.use(express.static("public"))

// usar o req.body
app.use(express.urlencoded({ extended: true }))

// routes
app.use(routes)
app.use(express.json());

const http = createServer(app);//criando protocolo http
const io = new Server(http);//criando protocolo ws

io.on("connection", (socket) => {
    console.log("se conectou,socket.id");
});


http.listen(8080, () => {
    console.log(' sevidor rodando na url  localhost:8080');
});
