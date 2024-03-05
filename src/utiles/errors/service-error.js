const {statusCodes} = require('http-status-codes');

class  serviceError extends Error {
    constructor (  message,
        explanation,
        statusCode = statusCodes.INTERNAL_SERVER_ERROR
    ) {
        super();
        this.name = 'ServiceError';
       this.message = message;
       this.explanation = explanation;
       this.statusCode = statusCode;
      }
}

module.exports = serviceError;