/* eslint-disable import/no-anonymous-default-export */
const themeMode = (mode) => {
	const dark = mode === "dark" ? true : false;
	const Utils = {
		MODE: mode,
		COLORS: {
			PRIMARY: dark ? "#1a78d1" : "#145DA0",
			SECONDARY: "#ffffff",
			LIGHTER_PRIMARY: "#1a78d1",
			DARKER_PRIMARY: "#0d4172",
		},
		INPUTS: {
			BORDER_WIDTH: "1px",
			BORDER_STYLE: "solid",
			BORDER_COLOR: "#e5e5e5",
			BORDER_RADIUS: "8px",
			BACKGROUND_COLOR: "white",
			HEIGHT: "33px",
		},

		//NEW
		BODY: {
			BACKGROUND_COLOR: dark ? "#151D31" : "ghostwhite",
			COLOR: dark ? "#b4b7bd" : "#000000",
			BORDER_COLOR: dark ? "#3b4253" : "#000",
			BORDER_CUSTOM_COLOR: dark ? "#44405e" : "#000",
		},
		TYPOGRAPHY: {
			COLOR: dark ? "#d0d2d6" : "#363636",
			TITLE_COLOR: dark ? "#d0d2d6" : "#000000",
			LABEL_COLOR: dark ? "#d0d2d6" : "#000000",
			MUTED_COLOR: dark ? "#676d7d" : "#000000",
		},
		CARD: {
			BACKGROUND_COLOR: dark ? "#293045" : "#ffffff",
			BOX_SHADOW: dark
				? "0 4px 24px 0 rgba(#22292f, 0.24)"
				: "2px 2px 10px #85858565",
		},
		HEADER: {
			COLOR: dark ? "#b4b7bd" : "#FFF",
			BACKGROUND_COLOR: dark ? "#293045" : "#145DA0",
			BORDER_COLOR: dark ? "#3b4253" : "#000",
			BOX_SHADOW: dark
				? "0 4px 24px 0 rgb(0 0 0 / 24%)"
				: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
		},
		INPUT: {
			COLOR: dark ? "#d0d2d6" : "#000000",
			BACKGROUND_COLOR: dark ? "#283046" : "#ffffff",
			PLACEHOLDER_COLOR: dark ? "#676d7d" : "#000000",
			BORDER_COLOR: dark ? "#404656" : "#e5e5e5",
			BORDER_FOCUS_COLOR: dark ? "#1a78d1" : "#1a78d1",
			DISABLED_COLOR: dark ? "#24233a" : "#000000",
			DISABLED_BORDER_COLOR: dark ? "#444b60" : "#000000",
		},
		TABLE: {
			BACKGROUND_COLOR: dark ? "#283046" : "#ffffff",
			BACKGROUND_HEADER_COLOR: dark ? "#343d55" : "#ffffff",
			BACKGROUND_ROW_COLOR: dark ? "#283046" : "#ffffff",
			BACKGROUND_ROW_HOVER_COLOR: dark ? "#242b3d" : "#00a6ff2f",
			BORDER_COLOR: dark ? "#404656" : "#e5e5e5",
			BACKGROUND_ROW_SELECTED_COLOR: dark ? "#242b3d" : "#00a6ff2f",
		},
		CHART: {
			BORDER_COLOR: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
		},
		TAB: {
			COLOR: dark ? "#d0d2d6" : "#000",
			ACTIVE: dark ? "#145DA0" : "#145DA0",
			ACTIVE_COLOR: dark ? "#fff" : "#fff",
			HOVER: dark ? "#242b3d" : "#ccc",
			BORDER_COLOR: dark ? "#404656" : "#d8d8d87a",
		},
	};
	return Utils;
};

export default themeMode;

export const Utils = {
	COLORS: {
		PRIMARY: "#145DA0",
		SECONDARY: "#ffffff",
		LIGHTER_PRIMARY: "#1a78d1",
		DARKER_PRIMARY: "#0d4172",
	},
	INPUTS: {
		BORDER_WIDTH: "1px",
		BORDER_STYLE: "solid",
		BORDER_COLOR: "#e5e5e5",
		BORDER_RADIUS: "8px",
		BACKGROUND_COLOR: "white",
		HEIGHT: "28px",
	},
	BACKGROUND_COLOR: "F8F8FF",
	BORDER_COLOR: [
		"rgba(255, 99, 132, 1)",
		"rgba(54, 162, 235, 1)",
		"rgba(255, 206, 86, 1)",
		"rgba(75, 192, 192, 1)",
		"rgba(153, 102, 255, 1)",
		"rgba(255, 159, 64, 1)",
	],
};
