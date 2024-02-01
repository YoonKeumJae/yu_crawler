import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    width: 400px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    width: 400px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    width: 400px;
  }
`;
export const Title = styled.span`
  @media screen and (min-width: 1024px) {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
export const SignInForm = styled.form`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    padding: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    padding: 20px;
  }
`;
export const Input = styled.input`
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    margin: 4px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
    margin: 4px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 4px;
  }
`;
export const SubmitBtn = styled.button`
  @media screen and (min-width: 1024px) {
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;
export const Signup = styled.span`
  @media screen and (min-width: 1024px) {
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;
