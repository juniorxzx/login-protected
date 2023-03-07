import { Container, Content, Logo, Menu, Items, Item } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  return (
    <Container>
      <Content>
        <Logo>ARJ</Logo>

        <Menu>
          <Items>
            <Item>Home</Item>
            <Item>Cadastros</Item>
            <Item>Login</Item>
          </Items>
        </Menu>
      </Content>
    </Container>
  );
};

export default Navbar;
