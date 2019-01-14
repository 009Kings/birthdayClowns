var db = require("./models");

// db.user.create({
//   firstname: "Bob",
//   lastname: "Bobbington",
//   email: "bob@bobby.com",
//   password: "bobbington",
//   username: "bobbyboy",
//   dob: new Date("11/10/1992"),
//   bio: "I am a test dummy",
//   img: "http://www.placekitten.com/200/200"
// }).then((user)=>{
//   db.party.create({
//     userId: user.id,
//     name: "Bob's Birthday",
//     date: new Date(),
//     numClowns: 2
//   }).then(party=>{
//     console.log("Bob registered a party on", party.date)
//   })
// })

db.clown.create({
  name: "Chuckles",
  email: "hehehe@heh.com",
  perHR: 65
}).then(clown=>{
  db.party.findOne({
    where: {name: "Bob's Birthday"}
  }).then(bobsParty=>{
    bobsParty.addClown(clown);
  });
}).catch(err=>console.log("You fucked up!"));