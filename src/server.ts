import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './utils/logging';
import config from './config/config';
import { commonResponse } from './utils/response';
import userRoutes from './routes/user';

const NAMESPACE = 'Server';

const app = express();

/** Logging the request */
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    req.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requestd-width, Content-Type, Accept, Authorization');
    
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json(commonResponse(true, 200, {}, "Successfull", ""));
    }

    next();
});

/** Routes */
app.use("/user", userRoutes);

/** Error Handling */
app.use((req, res, next) => {
    const error = new Error('');

    return res.status(404).json(commonResponse(false, 404, {}, "", error.message));
});

/** Create the server */
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));