var mysql      = require('mysql');

let connection;

let createOrReplaceTable = `create table if not exists form(
                            id int primary key auto_increment,
                            name varchar(30),
                            email varchar(30),
                            subject varchar(30),
                            msg varchar(100)
                            );`;
 
module.exports = {
  connect: function (done){

		console.log("Trying to establish connection");

		connection = mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			multipleStatements: true,
			dateStrings: true
		});
		
		connection.connect((err)=>{
			if(err){
				console.log("Error in establishing connection");
				return done(err);
			}
			console.log("Connection established");
			connection.query(createOrReplaceTable, function (error, results, fields) {
        		if (error) throw error;
				return done(null);
      		});
		});
	},
    insertIntoForm: function (record){
        let insertIntoForm = `insert into form(name, email, subject, msg) values('`+[record.name, record.email, record.subject, record.msg].join("', '") +"');";
        connection.query(insertIntoForm, (err, results, fields)=>{
            if(err) throw err;
            console.log("INSERTED IN DB")
        })
    }
}