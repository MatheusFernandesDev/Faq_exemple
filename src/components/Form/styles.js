import styled from "styled-components";

export const FormComponent = styled.div`
	display: flex;
    flex-direction: ${(props) => props.column ? "column" : "row"};
	width: 100%;
	row-gap: ${(props) => props.row_gap ? props.row_gap + "px" : "20px"};
    column-gap: ${(props) => props.column_gap ? props.column_gap + "px" : "60px"};
	padding: 20px 0 0 20px;
	pointer-events: ${(props) => props.pointer_events ? "none" : ""};
	height: ${({height}) => height ? height : ""};
`;