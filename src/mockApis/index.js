const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';
// eslint-disable-next-line no-undef
const rootDir = path.dirname(__filename);

app.use(bodyParser.json());

const fileread = filename => {
  const data = fs.readFileSync(filename);
  return JSON.parse(data);
};

const router = express.Router();

router.get('/devices', (req, res) => {
  res.status(200).json(fileread(`${rootDir}/devices.json`));
});

router.get('/devices/:deviceId/metrics', (req, res) => {
  res.status(200).json(fileread(`${rootDir}/metrics.json`));
});

router.get('/devices/:deviceId/status', (req, res) => {
  res.status(200).json(fileread(`${rootDir}/status.json`));
});

router.post('/verify', (req, res) => {
  res.status(200).json(fileread(`${rootDir}/verification.json`));
});

app.use('/', router);
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
