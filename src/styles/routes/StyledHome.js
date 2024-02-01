import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
