const express = require('express');
const mongoose = require('mongoose')

const passportSetup = require('./src/config/passport');
const AuthRouter = require('./src/route/auth.route');
const Router = require('./src/config/router');
const app = express();

const {logger, logRequest} = require('./src/config/logger')

app.use(express.json());
app.use(logRequest);
app.use('/auth', AuthRouter);
app.use('/api', Router);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/diary', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(err) => { logger.error('connection error:', err) });
db.once('open', function() {
    logger.info('db connection success');
    app.listen(PORT, function() {
        logger.info(`Listening on port: ${PORT}`);
    });
});

