import { useEffect, useState } from "react";
import styled from "styled-components";
export default function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = "http://localhost:9000";
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to detch data");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading Data....</div>;
  return (
    <>
      <Container>
        <div className="item-container">
          <div className="image-container">
            <img src="" alt="ahsdh" />
          </div>
          <div className="details-container"></div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 76vh;
  background-image: url("/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0 10px;
  .item-container {
    width: 80vw;
    padding: 20px 0;
    margin: auto;
  }
`;
