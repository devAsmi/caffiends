function createUser(User) {
    const user = [

{
    name:"Sally ",
      email: "sally@gmail.com",
      password: "smiles234",
      points: 5,
      orderHistory: [["coffee", "danish"],["mocha", "coffee Cake"]]
       
},
{
    name:"Jessie",
      email: "Jessie@gmail.com",
      password: "larK566",
      points: 2,
      orderHistory: ["mocha", "coffee Cake"],
},
{
    name:"Lassie",
      email: "Lassie@gmail.com",
      password: "OldDog3",
      points: 15,
      orderHistory: ["mocha", "coffee Cake"],
},
{
    name:"Frankie",
      email: "Frankie@gmail.com",
      password: "FranksaLot4",
      points: 6,
      orderHistory: ["mocha", "coffee Cake",["Cake", "Tea"]],
}
 

];
return user;
}

module.exports = createUser;