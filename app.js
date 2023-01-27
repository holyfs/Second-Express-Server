const express = require('express');
const path = require('path');

const app = express();

const mainRoute = require('./routes/main.js');
const usersRoute = require('./routes/users.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute);
app.use(usersRoute);

app.listen(3000);