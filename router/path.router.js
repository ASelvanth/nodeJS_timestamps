const express = require('express');
const fs  = require('fs');
const router = express.Router();
const dotenv = require('dotenv');
var path = require('path');
dotenv.config();


//create the text file with timestamp--
    
router.post('/createfile', (req, res) => {
    // current date with time

    let timestamp = Date.now();

    const dateObject = new Date();
    let date = `0${dateObject.getDate()}`.slice(-2);
    let month = `0${dateObject.getMonth() + 1}`.slice(-2);
    let year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    let dateTime = `${date}.${month}.${year}--${hours}.${minutes}.${seconds}`;

    fs.writeFile(`${dateTime}.txt`, `${timestamp}`, (err) => {
    if (err) throw err;
    console.log('File has been created');
    });
    res.send(`Your text file ${dateTime}.txt is created`);
});

  
// retrieves all text files

router.get('/getfile', (req, res) => {
    fs.readdir('../nodejs', (err, files) => {
    if (err) 
        throw err;

    files.forEach((file) => {
        if (path.extname(file) === '.txt') {
        console.log(`The text file is:${file}`);

        fs.readFile(file, 'utf-8', (err, data) => {
            console.log(`${file} content is: ${data}`);
        });
        }
    });
    });

    res.send(`We have retrived all the text files.`);
});


module.exports = router;
  
