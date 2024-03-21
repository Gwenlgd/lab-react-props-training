import "./App.css";
import IdCard from "./components/IdCard/IdCard";
import Greeting from "./components/Greeting/Greeting";
import Random from "./components/Random/Random";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {/*
			{IdCard({
				lastName: "test",
				firstName: "Toto",
				gender: "male",
				height: 99,
				birth: new Date("2024-18-03"),
			})}
			 */}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greeting lang="ita">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>

      <Random min={5} max={10} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
