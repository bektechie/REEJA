const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA?retryWrites=true&w=majority";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client ) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3019;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});
// const http = require("http");    // http core modul
// const mongodb = require("mongodb");


// let db;
// const connectionString = "mongodb+srv://Abdulaziz2903:Abdulaziz2903@cluster0.dah6f2g.mongodb.net/REEJA?retryWrites=true&w=majority";

// mongodb.connect(
//   connectionString,
//   {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if(err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succeed");
//       console.log(client);
//       module.exports = client;

//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function() {
//         console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
//       });
//     }
//   }
// );

