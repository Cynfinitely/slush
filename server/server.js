const express = require('express');
const slushRoutes = require('./src/slush/routes');
const cors = require('cors');




const app = express();
const port = 5000;

//middlewares
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {

    res.send('Hello World!!!');
})

app.use('/api/v1/slush', slushRoutes);

app.listen(port, () => console.log(`App listening at ${port}`));
