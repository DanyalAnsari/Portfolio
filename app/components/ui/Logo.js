import React from "react";
import AppIcons from "./AppIcons";

const Logo = ({ className, size=112 }) => {
	return (
		<a href="#">
			<AppIcons
				lightIcon={"logo"}
				darkIcon={"logo_dark"}
				size={size}
				alt="logo"
				className={`cursor-pointer ${className}`}
			/>
		</a>
	);
};

export default Logo;
