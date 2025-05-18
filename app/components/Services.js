import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
	return (
		<div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
			<h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
			<h2 className="text-center text-5xl font-ovo">My Services</h2>
			<p className="text-center msx-w-2xl mx-auto mt-5 mb-12 font-ovo">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
				velit fuga vel fugiat laudantium quos vero commodi, voluptate
				necessitatibus sequi dolore amet corrupti quia blanditiis, id ad ipsa
				sit consequatur.
			</p>
			<div className="grid grid-cols-auto gap-6 my-10">
				{serviceData.map((service, idx) => (
					<div
						key={idx}
						className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500"
					>
						<Image src={service.icon} alt={service.title} className="w-10" />
						<h3 className="text-lg my-4 text-gray-700">{service.title} </h3>
						<p className="text-sm text-gray-600 leading-5">
							{service.description}
						</p>
						<a
							href={service.link}
							className="flex items-center gap-2 text-sm mt-5"
						>
							Read More{" "}
							<Image src={assets.right_arrow} alt="" className="w-4" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
