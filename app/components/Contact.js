import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "74b82a2e-184c-469a-84af-1115b41bfe04");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="contact"
			className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="text-center mb-2 text-lg font-ovo"
			>
				Connect with Me
			</motion.h4>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="text-center text-5xl font-ovo"
			>
				Get in Touch
			</motion.h2>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}
				className="text-center msx-w-2xl mx-auto mt-5 mb-12 font-ovo"
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				labore soluta eligendi neque. Distinctio suscipit obcaecati adipisci
				fuga dolore corrupti et delectus placeat numquam cumque!
			</motion.p>

			<motion.form
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.9 }}
				className="max-w-2xl mx-auto"
				onSubmit={onSubmit}
			>
				<div className="grid grid-cols-auto gap-6 mt-10 mb-8">
					<motion.input
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.1 }}
						type="text"
						placeholder="Enter your name"
						name="name"
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
						required
					/>
					<motion.input
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.1 }}
						type="email"
						placeholder="Enter your email"
						name="email"
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
						dark:bg-darkHover/30 dark:border-white/90"
						required
					/>
				</div>
				<motion.textarea
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.3 }}
					rows={6}
					placeholder="Enter your message"
					name="message"
					className="w-full p-4 outline-none  border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
					required
				></motion.textarea>
				<motion.button
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
					type="submit"
					className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500
					dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
				>
					Submit Now
					<Image src={assets.right_arrow_white} alt="" className="w-4" />
				</motion.button>
				<p className="mt-4">{result}</p>
			</motion.form>
		</motion.div>
	);
};

export default Contact;
