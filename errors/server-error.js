const HTTPError = require('./http-error');
const HTTPResponseStatusCodes = require('../constants/http-response-status-codes');

class ServerError extends HTTPError {
  constructor(message = 'Server error') {
    super(message, HTTPResponseStatusCodes.InternalServerError);
  }
}

module.exports = ServerError;
