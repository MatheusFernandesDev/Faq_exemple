import React from "react";
import { Container } from "./styles";

export default function Row({ children, style, ...rest }) {
	return <Container style={style} {...rest}>{children}</Container>;
}
