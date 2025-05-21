import { useTheme } from "@/app/context/ThemeContext";
import React from "react";
import AppIcons from "./AppIcons";

const ThemeTogglerButton = () => {
	const {  toggleTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
		>
			<AppIcons lightIcon={"moon_icon"} darkIcon={"sun_icon"} size={24} />
		</button>
	);
};

export default ThemeTogglerButton;
