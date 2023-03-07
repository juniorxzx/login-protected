import React from "react";
import { useForm } from "react-hook-form";
import Feed from "../../components/Feed/index.jsx";
import { Container } from "./styles.js";
const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
     
      <Feed />
    </Container>
  );
};
export default Home;
