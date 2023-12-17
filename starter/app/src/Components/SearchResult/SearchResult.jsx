import styled from "styled-components";
export default function SearchResult({ data, BASE_URL }) {
  return (
    <>
      <FoodCards>
        {data?.map((food) => (
          <FoodCard key={food.name}>
            <div className="image-container">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="food-details">
              <div className="food-name">{food.name}</div>
              <div className="food-text">{food.text}</div>
              <div className="food-price">
                <div>${food.price.toFixed(2)}</div>
              </div>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </>
  );
}

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  display: flex;
  column-gap: 5px;
  /* background-color: #dbdbe19c; */
  .image-container img {
    width: 100px;
  }
  .food-details {
    display: flex;
    row-gap: 5px;
    flex-direction: column;
  }
  .food-name {
    font-weight: 600;
  }
  .food-text {
    font-size: 13px;
  }
  .food-price {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }
  .food-price div {
    background-color: #ff4343;
    padding: 3px 6px;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const FoodCards = styled.div`
  width: 80vw;
  padding: 20px 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  justify-content: center;
  row-gap: 34px;
`;
