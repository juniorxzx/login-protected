import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`;
export const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ListCards = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
`;
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
 
  }
  img {
    width: 200px;
    height: 300px;
    border-radius: 1rem;
  }
  span {
    position: relative;
    bottom: 20px;
    right: 0;
  }
`;
