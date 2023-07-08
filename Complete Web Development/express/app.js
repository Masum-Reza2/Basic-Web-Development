// heree L-70 + L-71 + L-72 are combined in one folder
// creating a custom backend in L-69 was a painful event. express make it simple and easy 
console.log('watching');

// here we input required files as var 
const express = require('express');
const path = require('path');
const app = express();
const port = 80; //here useful port 80

// L-72 static files and installing pug templete engine

// For serving static files 
app.use('/static', express.static('static'));

// set the templete engine as pug 
app.set('view engine', 'pug');

// set the views directory 
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('index', { title: 'Hey Masum', message: 'Hello there thanks for telling me how to use pug!' })
  });

// like navigating menus instead if/else conditions
app.get('/', (req, res)=>{
    res.send('This is home page.');
});

app.post('/about', (req, res)=>{
    res.send('this is about page');
})

app.get('/this', (req, res)=>{
    res.status(404).send('404 page not found');
})

// to start the server mendatory code is 
app.listen(port, ()=>{
    console.log(`the application is started sucessfully in port ${port}`);
});