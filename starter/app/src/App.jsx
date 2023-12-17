import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult/SearchResult";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const BASE_URL = "http://localhost:9000";
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };
  console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading Data....</div>;
  return (
    <>
      <Navigation onChange={searchFood}></Navigation>
      <Container>
        <SearchResult BASE_URL={BASE_URL} data={filteredData}></SearchResult>
      </Container>
    </>
  );
};

export default App;
const Container = styled.div`
  width: 100vw;
  /* height: 76vh; */
  background-image: url("/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;
`;
