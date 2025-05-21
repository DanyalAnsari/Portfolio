import Image from "next/image";
import React from "react";

const AppImages = ({ src, size, className, ...props }) => {
	if (size) {
	}
	return (
		<Image
			src={src}
			alt=""
			style={{ height: "auto", width: "auto" }}
			className={`object-cover ${className}`}
			priority
			{...props}
		/>
	);
};

export default AppImages;
