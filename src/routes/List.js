import styled from "styled-components";
import SourceAdd from "../components/SourceAdd";
import SourceDelete from "../components/SourceDelete";

const Wrapper = styled.div``;
const Title = styled.span``;
const Box = styled.div``;

const List = () => {
  return (
    <Wrapper>
      <Title>현재 내 구독 목록</Title>
      <Box>
        <SourceDelete />
        <SourceDelete />
      </Box>
      <Title>구독 가능한 목록</Title>
      <Box>
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
