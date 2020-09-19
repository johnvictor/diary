const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${new Date(timestamp)} ${level}: ${message}`;
});
module.exports = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.File({filename: 'log/error.log', level: 'error'}),
        new transports.File({filename: 'log/combined.log'}),
        new transports.Console(),
    ]
});