import { useForm } from "react-hook-form";
import { Container, Content, ListCards, Card } from "./styles";

const Feed = () => {
 
  const items = [
    {
      id: 1,
      name: "Junior",
      img: "https://source.unsplash.com/random/?sky",
      description: "lorem ipsun ",
    },
    {
      id: 2,
      name: "Junior",
      img: "https://source.unsplash.com/random/?dog",
      description: "lorem ipsun ",
    },
    {
      id: 3,
      name: "Junior",
      img: "https://source.unsplash.com/random/?cat",
      description: "lorem ipsun ",
    },
    {
      id: 4,
      name: "Junior",
      img: "https://source.unsplash.com/random/?stars",
      description: "lorem ipsun ",
    },
  ];
  return (
    <Container>
      <Content>
        <ListCards>
          {items.map((item) => (
            <Card key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.img} alt="" />
              <span>{item.description}</span>
            </Card>
          ))}
        </ListCards>
      </Content>
    </Container>
  );
};

export default Feed;
