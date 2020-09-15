const HTTPError = require('./http-error');
const HTTPResponseStatusCodes = require('../constants/http-response-status-codes');

class NotFoundError extends HTTPError {
  constructor(message = 'Not found') {
    super(message, HTTPResponseStatusCodes.NotFound);
  }
}

module.exports = NotFoundError;
