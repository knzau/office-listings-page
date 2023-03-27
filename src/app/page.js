import Image from "next/image";
import { Inter } from "next/font/google";
import Plus from "./icons/Plus";
import LocationAccordion from "./components/LocationAccordion";
import CustomButton from "./components/CustomButton";

export default function Home() {
	return (
		<main className="bg-primary-light-grey min-h-full w-full">
			<div className="w-full flex flex-col justify-center items-center">
				<h1 className="text-display-2 text-center text-accent-blue mb-12 pt-160 leading-none font-light">
					Offices
				</h1>
				<div className="mb-25">
					<CustomButton className="bg-accent-blue w-80 text-primary-light-grey font-bold py-4 px-6 rounded-xl shadow-base h-14 flex justify-between items-center mx-auto">
						<span className="font-normal leading-6">Add New Location</span>
						<Plus />
					</CustomButton>
				</div>
				<div className="w-80">
					<LocationAccordion />
				</div>
			</div>
		</main>
	);
}
