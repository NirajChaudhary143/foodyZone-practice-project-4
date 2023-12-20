import styled from "styled-components";
export default function SearchResult({ data, BASE_URL, searchedValue }) {
  return (
    <>
      {data && data.length ? (
        <FoodCards>
          {data.map((food) => (
            <FoodCard key={food.name}>
              <div className="image-container">
                <img src={BASE_URL + food.image} alt="" />
              </div>
              <div className="food-details">
                <div>
                  <div className="food-name">{food.name}</div>
                  <div className="food-text">{food.text}</div>
                </div>
                <div className="food-price">
                  <div>${food.price.toFixed(2)}</div>
                </div>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      ) : (
        <FoodCards>
          <div>{searchedValue} food not available.</div>
        </FoodCards>
      )}
    </>
  );
}

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  display: flex;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  .image-container img {
    width: 100px;
  }
  .food-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .food-name {
    font-weight: 600;
  }
  .food-text {
    margin-top: 5px;
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
  min-height: 65vh;
  padding: 40px 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  justify-content: center;
  row-gap: 20px;
`;
