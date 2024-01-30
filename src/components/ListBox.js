import styled from "styled-components";
import ListItem from "./ListItem";

const Wrapper = styled.div``;

const ListBox = () => {
  return (
    <Wrapper>
      <ListItem />
      <ListItem />
      <ListItem />
    </Wrapper>
  );
};

export default ListBox;
