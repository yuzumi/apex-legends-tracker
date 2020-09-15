const fetch = require('node-fetch');
const ServerError = require('../errors/server-error');
const ProfileNotFoundError = require('../errors/profile-not-found-error');
const HTTPResponseStatusCodes = require('../constants/http-response-status-codes');

const { TRACKER_API_KEY, TRACKER_API_URL } = require('../config');

class ProfileController {
  static async index(req, res) {
    const headers = { 'TRN-Api-Key': TRACKER_API_KEY };
  
    const { platform, gamertag } = req.params;
  
    const url = `${TRACKER_API_URL}/profile/${platform}/${gamertag}`;
  
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
  
      data.errors
        ? res.status(HTTPResponseStatusCodes.NotFound).json(new ProfileNotFoundError())
        : res.json(data);
        
    } catch (error) {
      console.error(error);
  
      res.status(HTTPResponseStatusCodes.InternalServerError).json(new ServerError());
    }
  }
}

module.exports = ProfileController;
