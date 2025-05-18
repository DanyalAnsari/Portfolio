import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const sideMenuRef = useRef();
	const [scroll, setScroll]=useState(false)
	const openSideMenu = () => {
		sideMenuRef.current.style.transform = "translateX(-16rem)";
	};
	const closeSideMenu = () => {
		sideMenuRef.current.style.transform = "translateX(16rem)";
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 50) {
				setScroll(true)
			}else{
               setScroll(false)
			}
		},[]);
	});
	return (
		<>
			<div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
				<Image
					src={assets.header_bg_color}
					alt="header_bg"
					className="w-full"
				/>
			</div>
			<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${scroll?"bg-white/50 backdrop-blur-lg shadow-sm":''}`}>
				<a href="#top">
					<Image
						src={assets.logo}
						alt="logo"
						className="w-28 cursor-pointer mr-14"
					/>
				</a>

				<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${scroll? "": "bg-white/50 shadow-sm"} `}>
					<li>
						<a className="font-ovo" href="#top">
							Home
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#about">
							About Me
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#services">
							Services
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#work">
							My Work
						</a>
					</li>
					<li>
						<a className="font-ovo" href="#contact">
							Contact Me
						</a>
					</li>
				</ul>

				<div className="flex items-center gap-4">
					<button>
						<Image src={assets.moon_icon} alt="moon" className="w-6" />
					</button>

					<a
						href="#contact"
						className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 ml-4 rounded-full font-ovo"
					>
						Contact
						<Image src={assets.arrow_icon} className="w-3" alt="Contact" />
					</a>
					<button className="block md:hidden ml-3" onClick={openSideMenu}>
						<Image src={assets.menu_black} alt="moon" className="w-6" />
					</button>
				</div>

				{/* mobile menu */}
				<ul
					ref={sideMenuRef}
					className="flex md:hidden flex-col gap-4 p-20 px-10 fixed -right-64 top-0 w-64 h-screen bg-rose-50 transition duration-500 bottom-0"
				>
					<div className="absolute right-6 top-6" onClick={closeSideMenu}>
						<Image
							src={assets.close_black}
							alt="close"
							className="w-5 cursor-pointer"
						/>
					</div>
					<li>
						<a className="font-ovo" onClick={closeSideMenu} href="#top">
							Home
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeSideMenu} href="#about">
							About Me
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeSideMenu} href="#services">
							Services
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeSideMenu} href="#work">
							My Work
						</a>
					</li>
					<li>
						<a className="font-ovo" onClick={closeSideMenu} href="#contact">
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
