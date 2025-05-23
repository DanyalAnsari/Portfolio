import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import AppProvider from "./context/AppContext";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	title: "Danyal Ansari- Portfolio",
	description: "Danyal Ansari's Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
			>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
