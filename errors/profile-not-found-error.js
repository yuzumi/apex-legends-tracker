const NotFoundError = require('./not-found-error');

class ProfileNotFoundError extends NotFoundError {
  constructor(message = 'Profile not found') {
    super(message);
  }
}

module.exports = ProfileNotFoundError;
