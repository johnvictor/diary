const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${level} ${new Date(timestamp)}: ${message}`;
});
const logger = createLogger({
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

function logRequest(req, res, next) {
    logger.info(req.originalUrl);
    logger.info(JSON.stringify(req.body));

    next();
}

exports.logger = logger;
exports.logRequest = logRequest;