import { useEffect } from "react";
import ListBox from "../components/ListBox";
import { Wrapper, Title } from "../styles/routes/StyledHome";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    axios
      .get("https://yucrawlerserver.web.app/yuhome")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <Title>Title</Title>
      <ListBox />
    </Wrapper>
  );
};

export default Home;
