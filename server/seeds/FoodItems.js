function createFoodItems(itemType) {
  const foodItems = [
    {
      name: "Turkey Panini",
      description: "A delightful Turkey and cheese Panini",
      image:
        "https://images.unsplash.com/photo-1611675674726-062332b48623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: 8.99,
      points: 700,
      itemType: itemType,
    },
    {
      name: "Momo",
      description: "A Nepali styled dumpling",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      price: 9.99,
      points: 800,
      itemType: itemType,
    },
    {
      name: "Chicken Wrap",
      description: "Chicken breast wrap with Spinach, peppers, and spicy sauce",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      price: 9.99,
      points: 800,
      itemType: itemType,
    },
    {
      name: "Chicken Nuggets",
      description: "In-house made delicious chicken nuggets",
      image:
        "https://images.unsplash.com/photo-1619881590738-a111d176d906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      price: 9.99,
      points: 800,
      itemType: itemType,
    },
  ];
  return foodItems;
}

module.exports = createFoodItems;
