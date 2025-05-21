"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import ThemeTogglerButton from "./ui/ThemeTogglerButton";
import ButtonLink from "./ui/ButtonLink";
import AppImages from "./ui/AppImages";
import AppIcons from "./ui/AppIcons";
import Logo from "./ui/Logo";
import Menu from "./ui/Menu";

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	const sideMenuRef = useRef(null);

	const openSideMenu = () => {
		sideMenuRef.current.style.transform = "translateX(-16rem)";
		document.body.style.overflow = "hidden";
	};

	const closeSideMenu = () => {
		sideMenuRef.current.style.transform = "translateX(16rem)";
		document.body.style.overflow = "auto";
	};

	return (
		<NavbarContainer scroll={scroll} setScroll={setScroll}>
			<Logo className={"mr-14"} />
			<Menu
				className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:border dark:border-white/50 dark:bg-transparent ${
					!scroll && "bg-white/50 shadow-sm "
				}`}
			/>

			<div className="flex items-center gap-4">
				<ThemeTogglerButton />
				<ButtonLink path={"#contact"} className={"hidden lg:flex  ml-4"}>
					Contact
					<AppIcons
						lightIcon={"arrow_icon"}
						darkIcon={"arrow_icon_dark"}
						size={12}
					/>
				</ButtonLink>
				<button className="block md:hidden ml-3" onClick={openSideMenu}>
					<AppIcons
						darkIcon={"menu_white"}
						lightIcon={"menu_black"}
						size={24}
					/>
				</button>
			</div>

			{/* mobile menu */}
			<Menu
				ref={sideMenuRef}
				className="flex md:hidden flex-col gap-4 p-20 px-10 fixed -right-64 top-0 w-64 h-screen bg-rose-50 transition duration-500 bottom-0 dark:bg-darkHover dark:text-white"
				linkClickAction={closeSideMenu}
			>
				<div className="absolute right-6 top-6" onClick={closeSideMenu}>
					<AppIcons
						lightIcon={"close_black"}
						darkIcon={"close_white"}
						size={20}
					/>
				</div>
			</Menu>
		</NavbarContainer>
	);
};

const NavbarContainer = ({ setScroll, scroll, children }) => {
	const background = useRef();
	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setScroll]);

	return (
		<>
			<div
				ref={background}
				className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ${
					scroll && "hidden"
				}`}
			>
				<AppImages src={assets.header_bg_color} size={[1200, 200]} />
			</div>
			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
					scroll
						? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
						: ""
				}`}
			>
				{children}
			</nav>
		</>
	);
};

export default Navbar;
