export default function Card(props) {
  return (
    <>
      {props.data.map((item) => (
        <div>
          <h1>price: {item.price}</h1>
          <h1>price: {item.size}</h1>
          <h1>price: {item.category}</h1>
          <img src={item.photo} />
        </div>
      ))}
    </>
  );
}
