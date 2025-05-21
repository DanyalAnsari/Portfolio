import React from "react";
import { motion } from "motion/react";

const MotionContainer = ({ className, children, transition, initialState, finalState }) => {
	return (
		<motion.div
			initial={{ opacity: 0, ...initialState }}
			whileInView={{ opacity: 1, ...finalState }}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default MotionContainer;
