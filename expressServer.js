// we need this to run in a local host context instead og file so thet we can run enumerate devices (it must be run in a secure context)


const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname)));

app.listen(3001)