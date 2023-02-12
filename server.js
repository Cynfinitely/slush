const express = require('express');
const slushRoutes = require('./src/slush/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const passport = require('passport')
const path = require('path')


//import passport middleware
require('./src/slush/middlewares/passport-middleware')

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));

}



app.get('/', (req, res) => {

    res.send('Hello World!!!');
})

app.use('/api/v1/slush', slushRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`App listening at ${port}`));
