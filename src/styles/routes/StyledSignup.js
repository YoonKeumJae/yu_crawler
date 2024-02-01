import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  width: 400px;
`;
export const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 300px;
  padding: 20px;
`;
export const Input = styled.input`
  font-size: 18px;
  margin: 4px;
`;
export const Signin = styled.span`
  margin-top: 10px;
`;
export const Error = styled.span`
  color: tomato;
`;
