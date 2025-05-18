import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
		>
			<h4 className="text-center mb-2 text-lg font-ovo">Connect with Me</h4>
			<h2 className="text-center text-5xl font-ovo">Get in Touch</h2>
			<p className="text-center msx-w-2xl mx-auto mt-5 mb-12 font-ovo">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				labore soluta eligendi neque. Distinctio suscipit obcaecati adipisci
				fuga dolore corrupti et delectus placeat numquam cumque!
			</p>

			<form className="max-w-2xl mx-auto">
				<div className="grid grid-cols-auto gap-6 mt-10 mb-8">
					<input type="text" placeholder="Enter your name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" required/>
					<input type="email" placeholder="Enter your email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" required/>
				</div>
				<textarea rows={6} placeholder="Enter your message" className="w-full p-4 outline-none  border-[0.5px] border-gray-400 rounded-md bg-white mb-6" required></textarea>
				<button type="submit" className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">Submit Now<Image src={assets.right_arrow_white} alt="" className="w-4"/></button>
                <p className="mt-4">sending...</p>
			</form>
		</div>
	);
};

export default Contact;
