const Data = [
  {
    id: "h-1",
    name: "Asus 1",
    category: { id: 3, name: "Mobile" },
    price: "35000",
    img: "https://via.placeholder.com/960x240",
  },
  {
    id: "h-2",
    name: "Asus 2",
    category: { id: 2, name: "Mouse" },
    price: "500",
  },
  {
    id: "h-3",
    name: "Asus 3",
    category: { id: 1, name: "Route" },
    price: "3000",
  },
  {
    id: "s-1",
    name: "Samsung 1",
    category: { id: 1, name: "Route" },
    price: "2000",
  },
  {
    id: "s-2",
    name: "Samsung 2",
    category: { id: 3, name: "Mobile" },
    price: "30000",
  },
  {
    id: "s-3",
    name: "Samsung 3",
    category: { id: 3, name: "Mobile" },
    price: "35000",
  },
  {
    id: "s-4",
    name: "Samsung 4",
    category: { id: 2, name: "Mouse" },
    price: "300",
  },
  {
    id: "p-1",
    name: "Pants 1",
    category: { id: 2, name: "Mouse" },
    price: "1000",
  },
  {
    id: "p-2",
    name: "Pants 2",
    category: { id: 1, name: "Route" },
    price: "3000",
  },
  {
    id: "p-3",
    name: "Pants 3",
    category: { id: 4, name: "tv" },
    price: "25000",
  },
];

export const getProducts = () => {
  return Data;
};

export const getProductById = (productId) => {
  return Data.find((product) => product.id === productId);
};

// const types = [
//   { id: "t-1", name: "mobile" },
//   { id: "t-2", name: "route" },
//   { id: "t-3", name: "mous" },
// ];
// export const getTypes = () => {
//   return types;
// };
export default Data;
