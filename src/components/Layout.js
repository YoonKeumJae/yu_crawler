import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { Outlet, useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Logout = styled.button``;

const Layout = () => {
  const navigate = useNavigate();

  const onClickLogout = async () => {
    const ok = window.confirm("Are you sure you want to log out?");
    if (ok) {
      await signOut(auth);
      navigate("/signin");
    }
  };

  return (
    <Wrapper>
      Layout here
      <Logout onClick={onClickLogout}>Log out</Logout>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
