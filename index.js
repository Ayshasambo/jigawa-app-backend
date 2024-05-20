const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { application } = require('express');
require('dotenv/config');
const cors = require("cors");

//connect to database
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('connected to mongodb...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

//routes
const cropRoute = require('./routes/crop');
const srpRoute = require('./routes/srp');
const tempRoute = require('./routes/temp');
const lgaRoute = require('./routes/lga');

//middlewares
app.use(cors());
app.use(express.json());
app.use('/api/crop', cropRoute)
app.use('/api/srp', srpRoute)
app.use('/api/temp', tempRoute)
app.use('/api/lga', lgaRoute)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));