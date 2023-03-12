function createColdBeverage(itemType) {
  const coldBeverages = [
    {
      name: "Cold coffee",
      description: "A refreshing cup of iced cold coffee",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      price: 2.99,
      points: 200,
      itemType: itemType,
    },
    {
      name: "Oreo Frappuccino",
      description: "A refreshing Oreo Frappuccino",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 2.99,
      points: 200,
      itemType: itemType,
    },
    {
      name: "Sparkling Pineapple Gingerale",
      description: "A refreshing cup of Sparkling Pineapple Gingerale",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      price: 2.99,
      points: 200,
      itemType: itemType,
    },
  ];
  return coldBeverages;
}

module.exports = createColdBeverage;
