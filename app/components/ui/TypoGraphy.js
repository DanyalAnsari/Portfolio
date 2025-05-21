import { motion } from "motion/react";

const defaultClass = "text-center text-5xl font-ovo";
export const H1 = ({ className, children, ...props }) => {
	return (
		<motion.h2
			initial={{ y: -30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.5 }}
			{...props}
			className={`${defaultClass} ${className}`}
		>
			{children}
		</motion.h2>
	);
};
export const H2 = ({ className, children, ...props }) => {
	return (
		<motion.h2
			initial={{ y: -20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			{...props}
			className={`${defaultClass} ${className}`}
		>
			{children}
		</motion.h2>
	);
};
export const H3 = ({ className, children, ...props }) => {
	<motion.h3
		initial={{ y: -20, opacity: 0 }}
		whileInView={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.6, delay: 0.3 }}
		{...props}
		className={`${defaultClass} ${className}`}
	>
		{children}
	</motion.h3>;
};
export const H4 = ({ className, children, ...props }) => {
	return (
		<motion.h4
			initial={{ y: -20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			{...props}
			className={`${defaultClass} ${className}`}
		>
			{children}
		</motion.h4>
	);
};
export const P = ({ className, children, ...props }) => {
	return (
		<motion.p
			initial={{ y: -20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.7 }}
			{...props}
			className={`text-center font-ovo max-w-2xl mx-auto mt-5 mb-12 ${className}`}
		>
			{children}
		</motion.p>
	);
};
