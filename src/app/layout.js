import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata = {
	title: "Offices Listing Page",
	description: "List of offices with add, edit, delete feature",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
