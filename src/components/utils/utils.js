const expenseArray = [
  { id: 1, description: "Eggs", price: "6", date: new Date(2022, 10, 23) },
  { id: 2, description: "Shampoo", price: "200", date: new Date(2022, 5, 20) },
  { id: 3, description: "Bread", price: "45", date: new Date(2022, 6, 22) },
  { id: 4, description: "Milk", price: "32", date: new Date(2022, 18, 12) },
  {
    id: 5,
    description: "Casserole",
    price: "500",
    date: new Date(2022, 11, 21),
  },
];

const incomeArray = [
  { id: 2, description: "Salary", date: new Date(2022, 3, 30), credit: 50000 },
  { id: 4, description: "Gig-1", date: new Date(2022, 1, 25), credit: 30000 },
  { id: 56, description: "Gig-2", date: new Date(2022, 5, 2), credit: 20000 },
];

export { expenseArray, incomeArray };
