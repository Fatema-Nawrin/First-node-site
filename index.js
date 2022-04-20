const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Lets go and watch the amazing bridgerton show')
})
const users = [
    { id: 1, name: 'Dobby', email: 'dobby@hmail.com', number: 7654 },
    { id: 2, name: 'Hagrid', email: 'Hagrid@hmail.com', number: 7654 },
    { id: 3, name: 'Luna', email: 'Luna@hmail.com', number: 7654 },
    { id: 4, name: 'harry', email: 'harry@hmail.com', number: 7654 },
    { id: 5, name: 'hermione', email: 'hermione@hmail.com', number: 7654 },
    { id: 6, name: 'sirius', email: 'sirius@hmail.com', number: 7654 },
    { id: 7, name: 'draco', email: 'draco@hmail.com', number: 7654 },
    { id: 8, name: 'ron', email: 'ron@hmail.com', number: 765 },
    { id: 9, name: 'voldemort', email: 'voldemort@hmail.com', number: 7654 },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)

    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('Request:', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('Listening to port', port);
})