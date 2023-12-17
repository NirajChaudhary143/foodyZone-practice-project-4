import styled from "styled-components";
export default function Navigation() {
  return (
    <>
      <Container>
        <div className="container-1">
          <img src="/images/Foody Zone.svg" alt="" />
          <input type="search" placeholder="Seacrh Food..." />
        </div>
        <div className="container-2">
          <ul>
            <li>All</li>
            <li>Breakfast</li>
            <li>Launch</li>
            <li>Dinner</li>
          </ul>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 10vh;
  width: 80vw;
  padding: 50px 0;
  margin: auto;
  input {
    border: 1px solid red;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #323334;
    color: white;
    transition: all 0.5s;
    width: 200px;
    font-weight: 600;
  }
  input::placeholder {
    color: white;
    font-weight: 600;
  }
  input:focus {
    border-radius: 10px;
    width: 250px;
  }
  .container-1 {
    display: flex;
    justify-content: space-between;
  }
  .container-2 {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  ul {
    display: flex;
  }
  ul li {
    list-style: none;
    margin: 10px 20px;
    cursor: pointer;
    background-color: #ff4343;
    padding: 5px 30px;
    border-radius: 8px;
  }
  @media screen and (max-width: 700px) {
    .container-1 {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .container-1 img {
      width: 300px;
      margin-bottom: 10px;
    }
    ul li {
      margin: 5px;
      font-size: 13px;
      padding: 5px 20px;
    }
  }
`;
