const db = require("../config/connection");

const { Item, ItemType } = require("../models");
const createColdBeverage = require("./ColdItems");
const createFoodItems = require("./FoodItems");
const createHotBeverage = require("./HotItems");

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
    ...createHotBeverage(ItemTypes[0]._id),
    ...createColdBeverage(ItemTypes[1]._id),
    ...createFoodItems(ItemTypes[2]._id),
  ]);
  console.log("Items seeded");

  // once seeding is done exit
  process.exit();
});
