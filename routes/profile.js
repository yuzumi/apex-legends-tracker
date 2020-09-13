const { Router } = require('express');
const fetch = require('node-fetch');

const { TRACKER_API_KEY, TRACKER_API_URL } = require('../config');

const router = Router();

router.get('/:platform/:gamertag', async (req, res) => {
  const headers = { 'TRN-Api-Key': TRACKER_API_KEY };

  const { platform, gamertag } = req.params;

  const url = `${TRACKER_API_URL}/profile/${platform}/${gamertag}`;

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();

    data.errors
      ? res.status(404).json({ message: 'Profile not found' })
      : res.json(data);
      
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
