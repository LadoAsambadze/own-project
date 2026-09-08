import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  function GetDetails(item) {
    navigate(`/catalog/${item.id}`);


 
  }

  return (
    <>
      {props.shoes.map((item) => (
        <div className="p-10 border-4 " onClick={() => GetDetails(item)}>
          <h1>{item.brand}</h1>
          <h1>{item.model}</h1>
        </div>
      ))}
    </>
  );
}


