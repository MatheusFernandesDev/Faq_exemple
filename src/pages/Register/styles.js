import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
  background-color: white;
`;

export const MainContainer = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-top: 90px;
  @media ${device.tablet} {
    width: 100vw;
  }

  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Logo = styled.img`
  width: 350px;
  margin-bottom: 40px;
`;

export const FormContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobile} {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
`;

export const Bg = styled.div`
  background-color: #ed1c24;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    display: none;
  }
`;
export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Span = styled.span`
  font-size: 14px;
  color: #000;
  /* display: flex; */
  /* justify-content: center; */
  /* text-align: left; */
  padding-top: 5px;
  text-decoration: none !important;
  text-align: ${(props) => {
    switch (props.align) {
      case "left":
        return "left";
      case "right":
        return "right";
      case "center":
        return "center";
      default:
        return "left";
    }
  }};

  &:hover {
    opacity: 0.8;
  }
  &:visited {
    opacity: 0.8;
  }
  & > a {
    color: black;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  height: 3em;
  padding: 0.5em;

  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 10px;
  margin-top: 20px;
  align-self: flex-start;
`;

export const Button = styled.button`
  margin-top: 20px;
  color: white;

  flex-grow: 0;

  background-color: red;
  height: 3em;
  padding: 0 100px;
  border: 0;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
  &:hover {
    opacity: 0.8;
  }
`;
