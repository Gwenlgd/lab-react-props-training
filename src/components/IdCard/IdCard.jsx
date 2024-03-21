const IdCard = (props) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const birthDate = props.birth.toLocaleDateString(undefined, options);

  const componentStyle = { border: "1px solid black", margin: "1rem" };

  return (
    <div className="IdCard" style={componentStyle}>
      <img src={props.picture} alt="" />
      <p>First name: {props.firstName}</p>
      <p>First name: {props.lastName}</p>
      <p>First name: {props.gender}</p>
      <p>First name: {props.height / 100}m</p>
      <p>First name: {birthDate}</p>
      <ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default IdCard;
