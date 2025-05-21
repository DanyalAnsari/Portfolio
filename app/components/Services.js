import React from "react";
import { serviceData } from "@/assets/assets";
import AppIcons from "./ui/AppIcons";
import SectionLayout from "./layouts/SectionLayout";
import { P } from "./ui/TypoGraphy";
import List from "./ui/List";
import Card, { CardDescription, CardTitle } from "./ui/Card";

const Services = () => {
	return (
		<SectionLayout id="services">
			<P>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
				velit fuga vel fugiat laudantium quos vero commodi, voluptate
				necessitatibus sequi dolore amet corrupti quia blanditiis, id ad ipsa
				sit consequatur.
			</P>
			<List
				transition={{ duration: 0.9, delay: 0.6 }}
				className="grid grid-cols-auto gap-6 my-10"
			>
				{serviceData.map((service, idx) => (
					<Card key={idx} className="px-8 py-12">
						<AppIcons icon={service.icon} alt={service.title} size={40} />
						<CardTitle className="text-lg">{service.title}</CardTitle>
						<CardDescription className="leading-5">
							{service.description}
						</CardDescription>
						<a
							href={service.link}
							className="flex items-center gap-2 text-sm mt-5"
						>
							Read More
							<AppIcons icon={"right_arrow"} size={16} />
						</a>
					</Card>
				))}
			</List>
		</SectionLayout>
	);
};

export default Services;
