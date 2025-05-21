import { workData } from "@/assets/assets";
import React, { Children } from "react";
import { motion } from "motion/react";
import SectionLayout from "./layouts/SectionLayout";
import { P } from "./ui/TypoGraphy";
import ButtonLink from "./ui/ButtonLink";
import AppIcons from "./ui/AppIcons";
import List from "./ui/List";

const Works = () => {
	return (
		<SectionLayout id="projects">
			<P>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				labore soluta eligendi neque. Distinctio suscipit obcaecati adipisci
				fuga dolore corrupti et delectus placeat numquam cumque!
			</P>
			<List
				transition={{ duration: 0.6, delay: 0.9 }}
				className="grid grid-cols-auto my-10 gap-5 dark:text-black"
			>
				{workData.map((project, idx) => (
					<ProjectCard
						key={idx}
						style={{ backgroundImage: `url(${project.bgImage})` }}
					>
						<h2 className=" font-semibold">{project.title}</h2>
						<p className="text-sm text-gray-700">{project.description}</p>
					</ProjectCard>
				))}
			</List>
			<ButtonLink path="" className="py-3 mx-auto my-20">
				Show More
				<AppIcons
					lightIcon={"right_arrow_bold"}
					darkIcon={"right_arrow_bold_dark"}
					size={16}
				/>
			</ButtonLink>
		</SectionLayout>
	);
};

const ProjectCard = ({ children, style }) => (
	<li
		className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
		style={style}
	>
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}
			className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
		>
			<div className="font-outfit">{children}</div>
			<div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
				<AppIcons icon={"send_icon"} size={20} />
			</div>
		</motion.div>
	</li>
);
export default Works;
