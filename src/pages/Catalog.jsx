import Card from "../components/Card";

export default function Catalog() {
  const array = [
    {
      price: 100,
      size: "xs",
      photo: "/favicon.svg",
      category: "T-Shirt",
    },
    {
      price: 99,
      size: "M",
      photo: "/favicon.svg",
      category: "T-Shirt",
    },
    
  ];

 

  // შექმენით მასივი  სახელად X რომელშიც ეწერება 5 რიცხვი
  // შექმენით y ცვლადი რომლის პასუხიც იქნება x ის მაპი სადაც თითოეული რიცხვი გამრავლებულია ორზე 
  // console.log ში ჩაწერეთ y 



  object.map((item) => item )



  return (
    <>
      <Card data={array} />
 
      
    </>
  );
}
