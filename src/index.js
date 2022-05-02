const express = require('express');
const path = require('path');
const http = require('http');
const { initWsServer } = require('./services/socket');
const mainRouter = require('./routes');

const app = express();
const server = http.Server(app);

initWsServer(server);

app.use('/api', mainRouter);

const port = 8080;
server.listen(port, () => console.log(`Server Up port ${port}`));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
