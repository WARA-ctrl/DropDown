import "./App.css";
import DropDownComponent from "./component/DropDownComponent";
import FoodComponent from "./component/FoodComponent";
import { useState } from "react";
import MenuData from "./data/MenuData";

function App() {
  const [food, setFood] = useState(MenuData);
  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === "all") {
      setFood(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      // console.log(result);
      setFood(result);
    }
  };
  return (
    <div className="container">
      <DropDownComponent changeFoodData={changeFoodData} />
      <div className="content">
        {food.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
