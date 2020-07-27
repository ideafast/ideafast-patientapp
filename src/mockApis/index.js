const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';
// eslint-disable-next-line no-undef
const rootDir = path.dirname(__filename);

app.use(bodyParser.json());

const fileread = filename => fs.readFileSync(filename);

const router = express.Router();

router.get('/devices', (req, res) => {
  const data = fileread(`${rootDir}/devices.json`);
  const formattedData = data;
  res.status(200).json(formattedData.toString());
});

router.get('/deviceId/metrics', (req, res) => {
  const data = fileread(`${rootDir}/metrics.json`);
  const formattedData = data;
  res.status(200).json(formattedData.toString());
});

router.get('/deviceId/status', (req, res) => {
  const data = fileread(`${rootDir}/status.json`);
  const formattedData = data;
  res.status(200).json(formattedData.toString());
});

app.use('/api', router);
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
