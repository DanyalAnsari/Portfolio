import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import AppImages from "./ui/AppImages";
import AppIcons from "./ui/AppIcons";
import { H1, H3, P } from "./ui/TypoGraphy";

const Hero = () => {
	return (
		<div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
			>
				<AppImages
					src={assets.profile_img}
					className="w-32 rounded-full"
					alt="Profile_Image"
				/>
			</motion.div>
			<H3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
				Hi! I am Danyal Ansari
				<AppIcons icon={"hand_icon"} size={24} />
			</H3>
			<H1 className="text-3xl sm:text-6xl lg:text-[66px]">
				FullStack Web-Developer based in India.
			</H1>
			<P className="max-w-2xl mx-auto ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
				dolor doloribus sint fuga tempora tempore dolores quas.
			</P>
			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				<Button
					path={"#contact"}
					className={"border-white bg-black text-white dark:bg-transparent"}
					icon={"right_arrow_white"}
				>
					Contact Me
				</Button>
				<Button
					path={"/sample-resume.pdf"}
					className="border-gray-500 dark:bg-white dark:text-black"
					icon={"download_icon"}
					download
				>
					My Resume
				</Button>
			</div>
		</div>
	);
};

const Button = ({ path, className, children, icon, ...props }) => {
	return (
		<motion.a
			initial={{ y: -30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, delay: 1 }}
			href={path}
			className={`px-10 py-3 border rounded-full flex items-center gap-2 ${className}`}
			{...props}
		>
			{children}
			<AppIcons icon={icon} size={16} />
		</motion.a>
	);
};

export default Hero;
