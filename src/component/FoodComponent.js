const FoodComponent = ({ ...data }) => {
  return (
    <div className="single-food">
      <p>{data.foodName}</p>
      <img src={data.image_url} alt={data.foodName} />
    </div>
  );
};

export default FoodComponent;
