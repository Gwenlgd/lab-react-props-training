const Random = ({ max, min }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <p>
      Random value between {min} and {max} =&gt; {randomNumber}
    </p>
  );
};

export default Random;
