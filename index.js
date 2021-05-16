const express = require("express");

const app = express();
const port = 3000;

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

//set engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//set router
const newsRouter = require('./src/routes/news');

app.use('/', newsRouter);

//listen on port
app.listen(port, () => {
    console.log(`server started at ${port}`);
})