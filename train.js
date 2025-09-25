// // train.js
// console.log("Jack Ma maslahatlari");

// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60+
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") {
//         callback("insert a number", null);
//     } else if (a <= 20) {
//         callback(null, list[0]);
//     } else if (a > 20 && a <= 30) {
//         callback(null, list[1]);
//     } else if (a > 30 && a <= 40) {
//         callback(null, list[2]);
//     } else if (a > 40 && a <= 50) {
//         callback(null, list[3]);
//     } else if (a > 50 && a <= 60) {
//         callback(null, list[4]);
//     } else {
//         callback(null, list[5]);
//     }
// }

// maslahatBering(65, (err, data) => {
//     if (err) {
//         console.log('ERROR:', err);
//         return; // stop execution if there’s an error
//     }
//     console.log('javob:', data);
// });
// train.js



// console.log("Jack Ma maslahatlari");

// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60+
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") {
//         callback("insert a number", null);
//     } else if (a <= 20) {
//         callback(null, list[0]);
//     } else if (a > 20 && a <= 30) {
//         callback(null, list[1]);
//     } else if (a > 30 && a <= 40) {
//         callback(null, list[2]);
//     } else if (a > 40 && a <= 50) {
//         callback(null, list[3]);
//     } else if (a > 50 && a <= 60) {
//         callback(null, list[4]);
//     } else {
//         callback(null, list[5]);
//     }
// }

// maslahatBering(46, (err, data) => {
//     if (err) {
//         console.log('ERROR:', err);
//         return; // stop execution if there’s an error
//     }
//     console.log('javob:', data);
// });



// MIT TASK //
// function countLetter(letter, str) {
//     let count = 0;
//     for (let c of str) if (c === letter) count++;
//     return count;
// }

// // Example:
// console.log(countLetter("a", "Abdulazizbek")); // 3


// console.log("Jack Ma maslahatlari");

// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60+
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a < 20) return list[0];
//     else if (a >= 20 && a < 30) return list[1];
//     else if (a >= 30 && a < 40) return list[2];
//     else if (a >= 40 && a < 50) return list[3];
//     else if (a >= 50 && a < 60) return list[4];
//     else {
//       return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             resolveInclude(list(5))
//         },5000);
//       });
//     }
// }

// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");

// async function run() {
// let javob = await maslahatBering(20);
// console.log(javob);
// javob = await maslahatBering(31);
// console.log(javob);
// javob = await maslahatBering(41);
// console.log(javob);
// }
// run(); 

    // async function run() {
    //     let javob = await maslahatBering(20);
    //     console.log(javob);
    // }
    // run();


// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number, please");
//     else if (a < 20) callback(null, list[0]);
//     else if (a < 30) callback(null, list[1]);
//     else if (a < 40) callback(null, list[2]);
//     else if (a < 50) callback(null, list[3]);
//     else if (a < 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");

// function countLetter(letter, str) {
//     let count = 0;
//     for (let c of str) if (c === letter) count++;
//     return count;
// }

// // Example:
// console.log(countLetter("a", "Abdulazizbek")); // 3


function raqamtop(input) {
    let count = 0;
    for (let char of input) {
        if (!isNaN(char) && char !== " ") {
            count++;
        }
    }
    console.log("Total digits:", count);
}

// Correct call with string
raqamtop("SYYEE283782SSJSJ288828SSJS2228"); // Output: Total digits: 4



