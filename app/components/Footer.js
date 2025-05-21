import React from "react";
import Logo from "./ui/Logo";
import AppIcons from "./ui/AppIcons";

const Footer = () => {
	return (
		<div className="mt-20">
			<div className="text-center">
				<Logo size={144} className=" mx-auto mb-2" />
				<div className="w-max flex items-center gap-2 mx-auto">
					<AppIcons
						darkIcon={"mail_icon_dark"}
						lightIcon={"mail_icon"}
						size={24}
					/>
					mh.danyalansari@gmail.com
				</div>
			</div>
			<div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
				<p>© 2025 Danyal Ansari. All rights Reserved.</p>
				<ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
					<li>
						<a target="_blank" href="">
							Github
						</a>
					</li>
					<li>
						<a target="_blank" href="">
							Instagram
						</a>
					</li>
					<li>
						<a target="_blank" href="">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
