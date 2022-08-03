import app from "./server";
import {Server as websocketserver} from 'socket.io';
import http from 'http';
import sockets from "./socket";

import {connectdb} from './database'

connectdb();
const server = http.createServer(app)
const httpServer = server.listen(3500);
console.log('Server is running on port 3000')

const io = new websocketserver(httpServer)
sockets(io)