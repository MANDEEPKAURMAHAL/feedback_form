const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

//For public directory
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// app.set('', 'ejs')
app.set('view engine', 'ejs');

app.get('', function (req, res) {
    res.render('feedback')
})

app.post('/feedback', (req, res) => {
    let data = req.body;
    let dataFromFile = fs.readFileSync('public/word.json');
    let JsondataFromFile = JSON.parse(dataFromFile);
    console.log(JsondataFromFile);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    data["created_timestamp"] = date;
    JsondataFromFile.push(data)
    fs.writeFile(__dirname + "/public/word.json", JSON.stringify(JsondataFromFile, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        res.redirect('http://localhost:3000');
    });
})

app.listen((port), () => {
    console.info('App listening on port :', port);
}); 
