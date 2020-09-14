import axios from 'axios';

export default class HttpClient {
  constructor(options = {}) {
    this.http = axios.create(options);

    const httpMethods = ['request', 'get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'getUri'];

    httpMethods.forEach((httpMethod) => {
      this[httpMethod] = this.http[httpMethod];
    });
  }
}
