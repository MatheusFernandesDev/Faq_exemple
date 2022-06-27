import React, { useEffect, useState } from "react";
import randomString from "../../../helpers/randomString";
import { Select, Label, Container, Option, ErrorMessage } from "./styles";

export default function Index({
	style,
	required,
	initial_state,
	disableFirstOption,
	name_field,
	name_placeholder,
	errors,
	grid_width,
	grid_height,
	options = [],
	hidden,
	disabled,
	disabledSelect,
	param = randomString(5),
	...rest
}) {
	// grid_width = grid_width || 2;
	grid_height = grid_height || 1;
	name_field = name_field || "";
	name_placeholder =
		name_placeholder ||
		`Selecione ${name_field.toLowerCase?.() || "uma opção"}`;

	const [error, setError] = useState(null);

	useEffect(() => {
		if (errors) {
			setError(errors.find((err) => err.param === param));
		}
	}, [errors, param]);

	return (
		<Container
			grid_width={grid_width}
			grid_height={grid_height}
			hidden={hidden}
			style={style}
		>
			<Label errors={error}>{name_field}</Label>
			<Select errors={error} {...rest} onFocus={() => setError(null)} disabled={disabledSelect}>
				<Option key={-1} value={-1} disabled={disableFirstOption} required={required}>
					{name_placeholder}
				</Option>
				{options.map((option) => (
					<Option key={option.id} value={option.id}>
						{option.name}
					</Option>
				))}
			</Select>
			<ErrorMessage errors={error}>{error ? error.msg : ""}</ErrorMessage>
		</Container>
	);
}
