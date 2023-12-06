const express = require('express');
const cors = require('cors'); 
const app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {

    data = {};
    res.send(data);
});

app.listen(app.set('port'), ()=> {
    console.log(`Server on port ${app.set('port')}`);
});