const http = require("http");
const { console } = require("inspector");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.log("Error on connection mongodb");
    } else {
        console.log("Mongodb connected sucessfully")
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});
