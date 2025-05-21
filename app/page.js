"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Works />
			<Contact />
			<Footer />
		</>
	);
}
