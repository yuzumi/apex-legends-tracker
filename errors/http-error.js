class HTTPError extends Error {
  constructor(message, code) {
    super(message);

    this.name = this.constructor.name;
    this.code = code;
  }

  toJSON() {
    return {
      message: this.message,
      code: this.code,
      _type: this.name
    };
  }
}

module.exports = HTTPError;
