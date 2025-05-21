import { useTheme } from "@/app/context/ThemeContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const AppIcons = ({
	icon,
	darkIcon = icon,
	lightIcon = icon,
	size = 24,
	alt = "",
	className = "",
}) => {
	const { isDarkMode } = useTheme();
	const getAsset = (iconName) => {
		if (!assets[iconName]) {
			console.error(`Icon "${iconName}" not found in assets`);
			return assets.fallback_icon || null;
		}
		return assets[iconName];
	};

	const iconSrc = isDarkMode ? getAsset(darkIcon) : getAsset(lightIcon);

	return (
		<Image
			src={iconSrc}
			alt={alt}
			width={size}
			height={size}
			className={className}
			style={{
				objectFit: "contain",
			}}
		/>
	);
};

export default AppIcons;
