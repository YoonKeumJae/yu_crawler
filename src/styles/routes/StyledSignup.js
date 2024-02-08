import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
`;
export const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
`;
export const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  // display: flex;
  // flex-direction: column;
  // border: 1px solid black;
  // width: 300px;
  // padding: 20px;

  display: flex;
  flex-direction: column;
  // border: 1px solid black;
  box-shadow: 0px 2px 4px #1d3d76;
  border-radius: 10px;
  width: 300px;
  padding: 20px;
`;
export const Input = styled.input`
  font-size: 18px;
  margin: 4px;
  border: 1px solid #1d3d76;
  border-radius: 10px;
  padding: 4px 10px;
`;
export const SubmitBtn = styled.button`
  margin-top: 10px;
  font-size: 20px;
  padding: 4px;
  border: none;
  background-color: #1d3d76;
  border-radius: 20px;
  color: white;
`;
export const Signin = styled.span`
  margin-top: 20px;
`;
export const LinkToSignin = styled(Link)`
  text-decoration: none;
  color: #1d3d76;
  font-weight: 600;
`;
export const Error = styled.span`
  color: tomato;
`;
