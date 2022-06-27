import styled from "styled-components";

export const Template = styled.div``;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: auto;

  @media (max-width: 500px) {
    display: flex;
  }
`;

export const PageTitle = styled.h1`
  font-size: 27px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    margin:10px 0;
    background-color: #FFCACA;
    color: #000;
    border: 2px solid #FF0000;
    padding: 10px;
  }
`;
