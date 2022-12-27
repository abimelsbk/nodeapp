const nodemailer = require("nodemailer");
const transporterData = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "alexandrea60@ethereal.email",
        pass: "TYyn4h39zEFzNZAKCk"
    },
    tls:{
        rejectUnauthorized:false
    }
};

module.exports= {
    sendMail: function (record){
        return new Promise(async(resolve, reject)=>{
            let transporter = nodemailer.createTransport(transporterData);
            let info = await transporter.sendMail({
                from: '<'+process.env.MAIL_USER+'>',
                to: record.email,
                subject: "Confirmation Mail",
                html: "<span>Your Subject:" + record.subject +" Your msg: "+ record.msg +"<span>",
            });
            
                console.log("Message sent: %s", info.messageId);        
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            
           console.log("MAIL SENT");
            resolve(info.messageId);
        })
    }
}