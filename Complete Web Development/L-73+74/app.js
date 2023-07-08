// This is a combined totorial on Lecture 73 + 74 
// In this tutorial, we will learn how to use pug and how to write normal HTML using Pug
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory or access the views folder by this line of code.
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'PubG is the best game, but Gym is better', "content": con};
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{

    // console.log(req.body);

    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let OutputToWritre = `the name of the client is ${name}, ${age} years old, he/she is ${gender}, lives in ${address}, more about is ${more}`;

    fs.writeFileSync('output.txt', OutputToWritre);
    
    const params = {'title': 'PubG is the best game'}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
