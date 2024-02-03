import SourceAdd from "../components/SourceAdd";
import SourceDelete from "../components/SourceDelete";
import { Wrapper, Title, Box, Devide } from "../styles/routes/StyledList.js";

const List = () => {
  return (
    <Wrapper>
      <Box>
        <Title>현재 내 구독 목록</Title>
        <SourceDelete />
        <SourceDelete />
      </Box>
      <Devide />
      <Box>
        <Title>구독 가능한 목록</Title>
        <SourceAdd />
        <SourceAdd />
        <SourceAdd />
        <SourceAdd />
        <SourceAdd />
      </Box>
    </Wrapper>
  );
};

export default List;
