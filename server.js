const express = require('express');

const config = require('./config');
const { PORT, NODE_ENV } = config;

const app = express();

app.use('/api/v1/profile', require('./routes/profile'));

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
