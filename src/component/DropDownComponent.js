const DropDownComponent = ({ changeFoodData }) => {
  return (
    <nav>
      <h2>Dynamic Dropdown</h2>
      <select className="menu" onChange={changeFoodData}>
        <option value="all">All menu</option>
        <option value="Fried">Fried</option>
        <option value="Curry">Curry</option>
        <option value="Steak">Steak</option>
        <option value="Drink">Drink</option>
      </select>
    </nav>
  );
};

export default DropDownComponent;
