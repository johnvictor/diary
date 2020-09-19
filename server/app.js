const express = require('express');
const Router = require('./src/config/router');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use('/api', Router);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/diary', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(err) => { console.log('connection error:', err) });
db.once('open', function() {
    console.log('db connection success');
    app.listen(PORT, function() {
        console.log(`Listening on port: ${PORT}`);
    });
});

