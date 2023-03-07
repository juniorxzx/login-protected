import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  height: 64px;
  background: #9796f0;
  background: -webkit-linear-gradient(to right, #fbc7d4, #9796f0);
  background: linear-gradient(to right, #fbc7d4, #9796f0);
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
`;
export const Logo = styled.div``;

export const Menu = styled.div`

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
export const Items = styled.ul`
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  margin: 0 20px;
  cursor: pointer;
  font-weight: 600;
  &:last-child{
    margin-right: 0;
  }
  &:first-child{
    margin-left: 0;
  }
`;
