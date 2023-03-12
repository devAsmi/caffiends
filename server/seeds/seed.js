const db = require("../config/connection");

const { Item, ItemType } = require("../models");
const createFoodItems = require("./FoodItems");

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
      image:
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 2.99,
      points: 200,
      itemType: ItemTypes[0]._id,
    },
    {
      name: "Hot chocolate",
      description: "A piping cup of hot chocolate",
      image:
        "https://images.unsplash.com/photo-1608735484559-50aa06c9478c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 3.99,
      points: 300,
      itemType: ItemTypes[0]._id,
    },
    {
      name: "Cold coffee",
      description: "A refreshing cup of iced cold coffee",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      price: 2.99,
      points: 200,
      itemType: ItemTypes[1]._id,
    },
    ...createFoodItems(ItemTypes[2]._id),
  ]);
  console.log("Items seeded");

  // once seeding is done exit
  process.exit();
});
