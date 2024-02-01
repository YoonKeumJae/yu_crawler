import {
  Wrapper,
  Title,
  From,
  Date,
  Bookmark,
} from "../styles/components/StyledListItem";

const ListItem = () => {
  return (
    <Wrapper>
      <Title>공지 제목</Title>
      <From>From. 공지 출처</From>
      <Date>2024.03.12</Date>
      <Bookmark>북마크</Bookmark>
    </Wrapper>
  );
};

export default ListItem;
