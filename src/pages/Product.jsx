import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  const shoes = [
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

  const x = shoes.find((item) => item.id === Number(params.id));

  console.log(x);

  return <div>{shoes[0].brand}</div>;
}
