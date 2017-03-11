var login = require("facebook-chat-api");
 
var answeredThreads = {};
var answere;
// Create simple echo bot
login({email: "vietanhtvt@gmail.com", password: "Vietanhtvt@95"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("BOT - Hi! I'm currently offline. I will reply your inbox as soon as possible. My number : 01632653026. Thanks!", message.threadID);
        }
    });
});