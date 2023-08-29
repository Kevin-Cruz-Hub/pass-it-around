const express = require('express');
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall\n<a href=${10}>Take one down and pass it around</a>`)
})

app.get('/:num_of_bottles', (req, res) => {
    const { num_of_bottles } = req.params;
    let sub = num_of_bottles - 1
    if(num_of_bottles <= 0){
        res.send(`<h1>Theres no more bottles left, <a href=${99}>Start Over</a></h1>`)
    }else{
        res.send(`<h1>${num_of_bottles} Bottles of beer on the wall\n<a href=${sub}>Take one down and pass it around</a></h1>`)
    }
})
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})