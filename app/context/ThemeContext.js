"use client";
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	// Initialize state safely for SSR
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Set initial theme after mount (client-side only)
	useEffect(() => {
		const saved = localStorage.getItem("darkMode");
		const systemDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setIsDarkMode(saved ? saved === "enabled" : systemDark);
	}, []);

	// Update DOM and storage when theme changes
	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
	}, [isDarkMode]);

	const toggleTheme = () => setIsDarkMode((prev) => !prev);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within ThemeProvider");
	return context;
};
