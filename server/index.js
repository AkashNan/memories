// const express = require('express')  ->  Old node.js syntax we have import syntax now. go to package.json and add type as "module" to enable this.
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

// creating an EXPRESS APP  
const app = express();
//dotenv.config();

// Adding bodyparser settting to the EXPRESS APP
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

// Connect our server application(EXPRESS APP) to the database
// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://akashbuzz:akashbuzz123@aacluster.gkrkoof.mongodb.net/';
const PORT = process.env.PORT || 5000;

//mongoose.connect (CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true}) - both useNewURLParser and useUnifiedTopology depricted now. This were used to remove some waring and errors we see on console.

mongoose.connect (CONNECTION_URL)
 .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
 .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false); depricated now

