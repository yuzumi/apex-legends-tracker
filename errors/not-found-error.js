const HTTPError = require('./http-error');

class NotFoundError extends HTTPError {
  constructor(message = 'Not found') {
    super(message, 404);
  }
}

module.exports = NotFoundError;
