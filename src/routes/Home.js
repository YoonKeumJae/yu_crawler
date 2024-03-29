import axios from "axios";
import ListBox from "../components/ListBox";
import { Wrapper, Title } from "../styles/routes/StyledHome";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = axios.get(
          "https://us-central1-yucrawler.cloudfunctions.net/api/yuhome"
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Wrapper>
      <Title>Title</Title>
      <ListBox />
    </Wrapper>
  );
};

export default Home;
