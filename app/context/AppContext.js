"use client";
import { createContext, useContext } from "react";
import { ThemeProvider } from "./ThemeContext";

const AppContext = createContext({});

export function AppProvider({ children }) {
	const navLinks = [
		{ name: "Home", path: "#" },
		{ name: "About Me", path: "#about" },
		{ name: "Services", path: "#services" },
		{ name: "My Projects", path: "#projects" },
		{ name: "Contact", path: "#contact" },
	];
	const values = {
		navLinks,
	};
	return (
		<AppContext.Provider value={values}>
			<ThemeProvider>{children}</ThemeProvider>
		</AppContext.Provider>
	);
}

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};

export default AppProvider;
