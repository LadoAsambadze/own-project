import Card from "../components/Card";

export default function Catalog() {
  const shoes = [
    {
      id: 1,
      brand: "Nike",
      model: "Air Max 270",
      size: 42,
      color: "Black",
      price: 350,
      category: "Sneakers",
      inStock: true,
    },
    {
      id: 2,
      brand: "Adidas",
      model: "Ultraboost 22",
      size: 43,
      color: "White",
      price: 420,
      category: "Running",
      inStock: true,
    },
  ];

  return (
    <>
      <Card shoes={shoes} />
    </>
  );
}
