const express = require('express');
const app = express();
const port = 3000;

/* const handler = (req, res) =>{
    res.send('Hello from Node');
} */

/* app.get('/',(req, res) =>{
    res.send('Hello from Node'); 
}) */

app.get('/', (req, res) => {
    res.send('Hello From my first ever node')
});

app.listen(port, () => {
    console.log('listening to post', port);
})
