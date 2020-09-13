require('dotenv').config({ path: './.env.local' });

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  TRACKER_API_KEY: process.env.TRACKER_API_KEY,
  TRACKER_API_URL: process.env.TRACKER_API_URL
};
