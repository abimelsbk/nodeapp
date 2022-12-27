const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config();
const dbFunctions = require('./handlers/dbFunctions.js');
const routes = require('./handlers/routes');

var cors = require('cors')
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/build/static'))

dbFunctions.connect((err)=>{
    if(err){
        console.error(err);
        throw err;
    }
    routes(app);

    app.listen(process.env.PORT || 3000, ()=> console.log('listening on Port', process.env.PORT));
});