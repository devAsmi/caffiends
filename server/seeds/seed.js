const db = require("../config/connection");

const { Item, ItemType } = require("../models");

db.once("open", async () => {
  await ItemType.deleteMany();
  const ItemTypes = await ItemType.insertMany([
    { name: "Hot Beverages" },
    { name: "Cold Beverages" },
    { name: "Food" },
  ]);
  console.log("ItemTypes seeded");

  await Item.deleteMany();
  const Items = await Item.insertMany([
    {
      name: "Hot coffee",
      description: "A piping cup of hot coffee",
      image: "",
      price: 2.99,
      points: 200,
      itemType: ItemTypes[0]._id,
    },
    {
      name: "Hot chocolate",
      description: "A piping cup of hot chocolate",
      image: "",
      price: 3.99,
      points: 300,
      itemType: ItemTypes[0]._id,
    },
    {
      name: "Cold coffee",
      description: "A refreshing cup of iced cold coffee",
      image: "",
      price: 2.99,
      points: 200,
      itemType: ItemTypes[1]._id,
    },
    {
      name: "Turkey Panini",
      description: "A delightful Turkey and cheese Panini",
      image: "",
      price: 8.99,
      points: 700,
      itemType: ItemTypes[2]._id,
    },
  ]);
  console.log("Items seeded");

  // once seeding is done exit
  process.exit();
});
