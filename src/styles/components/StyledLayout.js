import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    width: 100%;
  }
`;
export const NavBarWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    margin: 10px;
    border-bottom: 3px solid black;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 10px;
    border-bottom: 3px solid black;
  }
  @media screen and (max-width: 767px) {
    margin: 10px;
    border-bottom: 3px solid black;
  }
`;
export const Button = styled.button`
  @media screen and (min-width: 1024px) {
    border: 3px solid black;
    border-radius: 5px;
    margin: 10px;
    font-size: 26px;
    background-color: white;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    border: 3px solid black;
    border-radius: 5px;
    margin: 10px;
    font-size: 26px;
    background-color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    border: 3px solid black;
    border-radius: 5px;
    margin: 10px;
    font-size: 14px;
    background-color: white;
    cursor: pointer;
  }
`;
