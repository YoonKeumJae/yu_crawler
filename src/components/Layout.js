import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";

const Wrapper = styled.div``;
const Title = styled.span``;
const Logout = styled.button``;
const Button = styled.button``;

const Layout = () => {
  const navigate = useNavigate();

  const onClickLogout = async () => {
    const ok = window.confirm("Are you sure you want to log out?");
    if (ok) {
      await signOut(auth);
      navigate("/signin");
    }
  };

  const onClickList = (e) => {
    e.preventDefault();
    navigate("/list");
  };

  return (
    <Wrapper>
      <Title>Navigation Bar</Title>
      <Profile />
      <Button type="button" onClick={onClickList}>
        List
      </Button>
      <Logout onClick={onClickLogout}>Log out</Logout>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
