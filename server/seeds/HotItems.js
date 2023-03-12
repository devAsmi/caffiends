function createHotBeverage(itemType) {
    const hotBeverages = [
      {
        name: "Milk tea",
        description: "A milk tea with ginger,cinamon",
        image:"https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
        price: 1.99,
        points: 100,
        itemType: itemType,
      },
      {
        name: "Green Tea",
        description: "A herbal green tea",
        image:
          "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        price: 9.99,
        points: 800,
        itemType: itemType,
      },
      {
        name: "Coffee",
        description: "Cappucino",
        image:
          "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        price: 2.99,
        points: 800,
        itemType: itemType,
      },
      {
        name: "Ginger Tea",
        description: "Tea with ginger",
        image:
          "https://images.unsplash.com/photo-1610450622827-195cb7308af8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
        price: 1.99,
        points: 800,
        itemType: itemType,
      },
    ];
    return hotBeverages;
  }
  
  module.exports = createHotBeverage;
  