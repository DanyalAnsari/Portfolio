import React from "react";
import { motion } from "motion/react";

const List = ({ transition, className, list, children }) => {
	return (
		<motion.ul
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={transition}
			className={className}
		>
			{children}
		</motion.ul>
	);
};



export default List;
