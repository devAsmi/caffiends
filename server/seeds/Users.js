function createUser(User) {
    const user = [

{
    name:"Sally ",
      username: "sally@gmail.com",
      password: "smiles234",
      points: 5,
      orderHistory: [["coffee", "danish"],["mocha", "coffee Cake"]]
       
},
{
    name:"Jessie",
      username: "Jessie@gmail.com",
      password: "larK566",
      points: 2,
      orderHistory: ["mocha", "coffee Cake"],
},
{
    name:"Lassie",
      username: "Lassie@gmail.com",
      password: "OldDog3",
      points: 15,
      orderHistory: ["mocha", "coffee Cake"],
},
{
    name:"Frankie",
      username: "Frankie@gmail.com",
      password: "FranksaLot4",
      points: 6,
      orderHistory: ["mocha", "coffee Cake",["Cake", "Tea"]],
}
 

];
return user;
}

module.exports = createUser;