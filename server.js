const express = require('express');

const config = require('./config');
const { PORT, NODE_ENV } = config;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
