const express = require('express');
const slushRoutes = require('./src/slush/routes');



const app = express();
const port = 5000;

app.use(express.json());


app.get('/', (req, res) => {

    res.send('Hello World!!!');
})

app.use('/api/v1/slush', slushRoutes);

app.listen(port, () => console.log(`App listening at ${port}`));
