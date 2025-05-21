import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const Menu = ({ linkClickAction, ...props }) => {
	const { navLinks } = useAppContext();
	const handleLinkClick = () => {
		if (linkClickAction) {
			linkClickAction();
		} else {
			null;
		}
	};

	return (
		<ul {...props}>
			{props.children}
			{navLinks.map(({ name, path }, idx) => (
				<li key={idx}>
					<a className="font-ovo" href={path} onClick={handleLinkClick}>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Menu;
