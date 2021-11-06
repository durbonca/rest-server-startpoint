require('dotenv').config();
const cors = require('cors')

const express = require('express'); 

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        // midlewares
        this.middlewares();
        // routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // body-parser
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}!`);
          });
    }
}

module.exports = Server;