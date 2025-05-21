import React from "react";
import { motion } from "motion/react";

const ButtonLink = ({ children, className, path, ...props }) => {
	return (
		<motion.a
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 1.1 }}
			href={path}
			className={`w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full px-10 py-2.5  hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover ${className}`}
		>
			{children}
		</motion.a>
	);
};

export default ButtonLink;
