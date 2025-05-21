import React from "react";
import { motion } from "motion/react";

const Card = ({ className, children }) => {
	return (
		<motion.li
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}
			className={`border border-gray-400 cursor-pointer rounded-lg hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 ${className}`}
		>
			{children}
		</motion.li>
	);
};

export const CardTitle = ({ className, children }) => (
	<h3 className={`text-gray-700 dark:text-white my-4 ${className}`}>
		{children}
	</h3>
);

export const CardDescription = ({ className, children }) => (
	<p className={`text-gray-600 text-sm dark:text-white/80 ${className}`}>
		{children}
	</p>
);

export default Card;
