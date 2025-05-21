import React from "react";
import { motion } from "motion/react";
import { H2, H4 } from "../ui/TypoGraphy";

const SectionLayout = ({ id, children, className }) => {
	const layoutsData = {
		about: {
			mainheading: "Introduction",
			subHeading: "About Me",
		},
		services: {
			mainheading: "What I Offer",
			subHeading: "My Services",
		},
		projects: {
			mainheading: "My Portfolio",
			subHeading: "My Latest Projects",
		},
		contact: {
			mainheading: "Connect With Me",
			subHeading: "Get In Touch",
		},
	};

	const data = layoutsData[id];

	return (
		<LayoutWrapper id={id} className={className}>
			<H4 className="mb-2 text-lg">{data.mainheading}</H4>
			<H2>{data.subHeading}</H2>
			{children}
		</LayoutWrapper>
	);
};

const LayoutWrapper = ({ children, id, className }) => (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 1 }}
		id={id}
		className={`w-full px-[12%] py-10 scroll-mt-20 ${className}`}
	>
		{children}
	</motion.div>
);

export default SectionLayout;
