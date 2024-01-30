import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { Outlet, useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const NavBarWrapper = styled.div``;
const Button = styled.button``;

const Layout = () => {
  const navigate = useNavigate();

  const onClickHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const onClickList = (e) => {
    e.preventDefault();
    navigate("/list");
  };
  const onClickBookmarks = (e) => {
    e.preventDefault();
    navigate("/bookmarks");
  };
  const onClickLogout = async () => {
    const ok = window.confirm("Are you sure you want to log out?");
    if (ok) {
      await signOut(auth);
      navigate("/signin");
    }
  };

  return (
    <Wrapper>
      <NavBarWrapper>
        <Button type="button" onClick={onClickHome}>
          Home
        </Button>
        <Button type="button" onClick={onClickList}>
          List Update
        </Button>
        <Button type="button" onClick={onClickBookmarks}>
          Bookmarks
        </Button>
        <Button type="button" onClick={onClickLogout}>
          Log out
        </Button>
      </NavBarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
