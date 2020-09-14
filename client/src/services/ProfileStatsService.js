export default class ProfileStatsService {
  constructor(httpClient, resource) {
    this.httpClient = httpClient;
    this.resource = resource;
  }

  createRequestUrl(platform, gamertag) {
    return [this.resource, platform, gamertag].join('/');
  }

  async getStats(platform, gamertag) {
    const url = this.createRequestUrl(platform, gamertag);
    const response = await this.httpClient.get(url);

    return response.data;
  }
}
