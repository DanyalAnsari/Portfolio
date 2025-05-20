"use client";
import {  useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	
	useEffect(() => {
		const darkMode = localStorage.getItem("darkMode");
		if (
			darkMode === "enabled" ||
			(!darkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, [setIsDarkMode]);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("darkMode", "enabled");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("darkMode", "disabled");
		}
	}, [isDarkMode]);
	return (
		<>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<Hero isDarkMode={isDarkMode} />
			<About isDarkMode={isDarkMode} />
			<Services isDarkMode={isDarkMode} />
			<Works isDarkMode={isDarkMode} />
			<Contact isDarkMode={isDarkMode} />
			<Footer isDarkMode={isDarkMode} />
		</>
	);
}
