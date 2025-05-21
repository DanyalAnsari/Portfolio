import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";
import SectionLayout from "./layouts/SectionLayout";
import AppImages from "./ui/AppImages";
import AppIcons from "./ui/AppIcons";
import List from "./ui/List";
import Card, { CardDescription, CardTitle } from "./ui/Card";
import MotionContainer from "./ui/MotionContainer";
import { P } from "./ui/TypoGraphy";

const About = () => {
	return (
		<SectionLayout id="about">
			<MotionContainer
				transition={{ duration: 0.8 }}
				className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
			>
				<MotionContainer
					initialState={{ scale: 0.9 }}
					finalState={{ scale: 1 }}
					transition={{ duration: 0.6 }}
					className="w-64 sm:w-80 rounded-3xl max-w-none"
				>
					<AppImages src={assets.user_image} className="w-full rounded-3xl" />
				</MotionContainer>
				<MotionContainer
					transition={{ duration: 0.6, delay: 0.8 }}
					className="flex-1"
				>
					<P>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minima
						mollitia quam consequatur temporibus corporis dolorum veniam laborum
						iste maxime placeat ad nostrum. Dolore porro nemo tempora adipisci.
						Tempora, unde.
					</P>

					<List
						transition={{ duration: 0.8, delay: 1 }}
						className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
					>
						{infoList.map((info, idx) => (
							<Card
								whileHover={{ scale: 1.05 }}
								key={idx}
								className="rounded-xl p-6"
							>
								<AppIcons
									lightIcon={info.icon}
									darkIcon={info.iconDark}
									className="w-7 mt-3"
								/>
								<CardTitle className=" font-semibold">{info.title}</CardTitle>
								<CardDescription>{info.description}</CardDescription>
							</Card>
						))}
					</List>

					<motion.h4
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.3 }}
						className="my-6 text-gray-700 font-ovo dark:text-white/80"
					>
						Tools I Use
					</motion.h4>
					<List
						transition={{ duration: 0.6, delay: 1.5 }}
						className="flex items-center gap-3 sm:gap-5"
					>
						{toolsData.map((tool, idx) => (
							<Card
								key={idx}
								className="flex items-center justify-center w-12 sm:w-14 aspect-square"
							>
								<AppIcons icon={tool} size={20} className="w-5 sm:w-7" />
							</Card>
						))}
					</List>
				</MotionContainer>
			</MotionContainer>
		</SectionLayout>
	);
};

export default About;
