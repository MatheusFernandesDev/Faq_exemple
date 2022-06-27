import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";

export const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;

  /* @media ${device.desktop} { */
  width: ${(props) =>
    props.grid_width ? props.grid_width * 8.3 + "%" : "100%"};
  /* } */

  /* @media ${device.tablet} {
		width: ${(props) =>
    props.grid_width ? props.grid_width * 16.6 + "%" : "100%"};
	} */

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Label = styled.label`
  ${(props) => (props.errors ? "color: red;" : "")}
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 90%;
  ${(props) => {
    if (props.errors) {
      return "color: darkred; margin-left: 5px";
    } else {
      return "display: none";
    }
  }}
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  height: 33px;
  width: 100%;
  padding: 0 5px;
  color: ${({ theme }) => theme.INPUT.COLOR};
  background-color: ${({ theme }) => theme.INPUT.BACKGROUND_COLOR};
  border-radius: ${Utils.INPUTS.BORDER_RADIUS};
  border-width: ${Utils.INPUTS.BORDER_WIDTH};
  border-style: ${Utils.INPUTS.BORDER_STYLE};
  border-color: ${(props) =>
    props.errors ? "red" : props.theme.INPUT.BORDER_COLOR};

  ${(props) => (props.errors ? "border-color: red; border-style: solid;" : "")}

  &:disabled {
    background-color: #ddd;
  }

  &:focus {
    border-color: ${({ theme }) => theme.INPUT.BORDER_FOCUS_COLOR};
  }
`;
