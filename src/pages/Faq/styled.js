import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
  }
`;

export const Title = styled.h1`
  cursor: pointer;

  hr {
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
