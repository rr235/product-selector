const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getQuestions } = require('./utils');

const { SERVER_PORT } = process.env;
const port = SERVER_PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, POST',
};
app.use(cors(corsOptions));

server.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.get('/questions', async (req, res) => {
  res.send(getQuestions());
});

app.post('/results', async (req, res) => {
  res.send({ shoes: 'cloudx', image: 'http://localhost:5000/images/Cloud_X.png' });
});

app.use('/images', express.static(path.join(__dirname, '/images')));
