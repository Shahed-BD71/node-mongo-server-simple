const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyParser.json())

// const rootCall = (req, res) => res.send('Thank you very much')

app.get('/',(req, res) => {
    const fruit = {
        product : 'apple',
        price : 150
    }
    res.send(fruit)
});
app.get('/fruit/banana', (req, res) => {
    res.send({fruit: "banana", quantity: 100, price: 5000})
});
const users = ["sakib", "Akbar", "Kuddus", "rakib", "tamim", "Abul", "kabul", "Pori", "Nusrat", "Azizul", 'Hakim'];


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
});
// post 
app.post('/addUser', (req, res) => {
    // console.log("data received", req.body)
    // save to database
    const user = req.body;
    user.id = 12;
    res.send(user);
})
app.listen(3000, () => console.log("listening to port 3000"));