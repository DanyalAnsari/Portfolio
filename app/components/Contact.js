import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SectionLayout from "./layouts/SectionLayout";
import { P } from "./ui/TypoGraphy";

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
		<SectionLayout
			id="contact"
			className="bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
		>
			<P>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
				labore soluta eligendi neque. Distinctio suscipit obcaecati adipisci
				fuga dolore corrupti et delectus placeat numquam cumque!
			</P>

			<motion.form
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.9 }}
				className="max-w-2xl mx-auto"
				onSubmit={onSubmit}
			>
				<div className="grid grid-cols-auto gap-6 mt-10 mb-8">
					<Input type="text" placeholder="Enter your name" name="name" />
					<Input type="email" placeholder="Enter your email" name="email" />
				</div>
				<motion.textarea
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.3 }}
					rows={6}
					placeholder="Enter your message"
					name="message"
					className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
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
		</SectionLayout>
	);
};

const Input = ({ initialPosition, ...props }) => (
	<motion.input
		initial={{ ...initialPosition, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ duration: 0.6, delay: 1.1 }}
		className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
		{...props}
		required
	/>
);

export default Contact;
