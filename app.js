const express = require('express');
const app = express();
const userRouters = require('./Routers/userRouter');
const router = require('./Routers/userRouter');
const course = require('./Routers/courseRouter');
require('./Config/Database');//databases refence connection

app.use(express.json());
app.use(router);
app.use(course);

module.exports = app;

