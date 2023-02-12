const express = require('express');
const slushRoutes = require('./src/slush/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const passport = require('passport')

//import passport middleware
require('./src/slush/middlewares/passport-middleware')

const app = express();
const port = 5000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());


app.get('/', (req, res) => {

    res.send('Hello World!!!');
})

app.use('/api/v1/slush', slushRoutes);

app.listen(port, () => console.log(`App listening at ${port}`));
