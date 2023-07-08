const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF 
// for serving static folder files
app.use('/static', express.static('static'));

// PUG SPECIFIC STUFF 
// set pug template engine 
app.set('view engine', 'pug');
// set/access views folder or directory 
app.set('/views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'PubG is the best game', "content": con};
    res.status(200).render('index.pug', params);
});

// START THE SERVER 
app.listen(port, ()=>{
    console.log(`the application is started successfully on port ${port}`);
});