// server-express.js (Includes global variables)
const express = require('express');
const app = express(); // initialize app
const port = 3000;
let counter = 0;

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js');
})

// GET functiont that returns the number of visits for this node session
app.get('/visits', (req, res) => { // at the /visits route
	counter += 1; // Increase our counter variable by 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

// Rock Paper Scissors game, each route is the option the user selects.
// The 'bot' will randomly select one of three options (1 for rock, 2 for paper, 3 for scissors)

// If the user picks rock
app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1; // Generates a random number from 0 to 1, then multiplies it by 3 and adds 1. Then, it floors the value, dropping everything to the right of the ones place.
    console.log(rndInt); // Print out the choice of the bot (great for troubleshooting)
    if (rndInt === 3){
        res.send("Bot picked scissors. You won!");
    } else if (rndInt === 1){
        res.send("Bot picked rock. Tie! Try again!");
    } else if (rndInt === 2){
        res.send("Bot picked paper. You lost!");
    }
});

// If the user picks paper
app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1; // Generates a random number from 0 to 1, then multiplies it by 3 and adds 1. Then, it floors the value, dropping everything to the right of the ones place.
    console.log(rndInt); // Print out the choice of the bot (great for troubleshooting)
    if (rndInt === 3){
        res.send("Bot picked scissors. You lost!");
    } else if (rndInt === 1){
        res.send("Bot picked rock. You won!");
    } else if (rndInt === 2){
        res.send("Bot picked paper. Tie! Try again!");
    }
});

// If the user picks scissors
app.get('/scissors', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1; // Generates a random number from 0 to 1, then multiplies it by 3 and adds 1. Then, it floors the value, dropping everything to the right of the ones place.
    console.log(rndInt); // Print out the choice of the bot (great for troubleshooting)
    if (rndInt === 3){
        res.send("Bot picked scissors. Tie! Try again!");
    } else if (rndInt === 1){
        res.send("Bot picked rock. You lost!");
    } else if (rndInt === 2){
        res.send("Bot picked paper. You won!");
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})