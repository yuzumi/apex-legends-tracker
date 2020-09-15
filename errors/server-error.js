const HTTPError = require('./http-error');

class ServerError extends HTTPError {
  constructor(message = 'Server error') {
    super(message, 500);
  }
}

module.exports = ServerError;
