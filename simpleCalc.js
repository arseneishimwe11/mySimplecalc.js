const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the simple calculator made using express Js!');
  });
app.get('/add', (req, res) => {     //Whenever the user sends a request with /add, this function will be called. 
    if (typeof req.query.numbers !== 'string') {
        return res.status(400).send('Bad request: numbers query parameter is missing or is not a string So please enter numbers in a string form');
      }
    const numberstring = req.query.numberstring.split('');           //This is to turn the entered into an array of digits separated by a comma.
    const numbers =numberstring.map(string => parseInt(string, 10)); //But as these numbers are in a string form they may be converted to numbers by this parseInt() function. 
    const sumFunc = () =>{
        let sum=0;
        for(let s=0;s<numbers.length;s++){
            sum += numbers[s];
        }
        return sum;
    } 
    res.send({sum:sumFunc() });
});

//Now for addition it is done and for doing the multiplication we will follow the same approach as;
app.get('/multiply', (req, res) => {
    const numberstring = req.query.numberstring.split(',');           
    const numbers =numberstring.map(string => parseInt(string, 10)); 
        let product = 1;
        const prodFunc = () =>{
        for(let s=0;s<numbers.length;s++){
            product *= numbers[s];
        }
        return product;
    } 
    res.send({ product:prodFunc() });
});

app.listen(3200)
console.log('Calculator app running on port 3200');




