const dbFunctions = require('./dbFunctions');
const mailer = require('./mailer');

module.exports = function(app){
    app.get("/", (req, res) => {
        res.sendFile(process.cwd() + "/build/index.html")
    })
    
    app.post("/test", (req, res) => {
        try{
            Promise.all([dbFunctions.insertIntoForm(req.body), mailer.sendMail(req.body)])
            .then((data)=>{
                console.log(data);
                res.sendStatus(200);
            })
        }catch(err){
            console.error(err);
        }
    })
}