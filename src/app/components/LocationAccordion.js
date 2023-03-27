"use client";
import React, { useState } from "react";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";
import LocationForm from "./LocationForm";

const LocationAccordion = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isEdit, setIsEdit] = useState(true);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	return isEdit ? (
		<div className="rounded-xl w-full shadow-base py-4 px-5 bg-white">
			<LocationForm />
		</div>
	) : (
		<div className="rounded-xl w-full shadow-base">
			<div
				className={`${
					isExpanded ? "bg-primary-grey rounded-t-xl shadow-inner-base" : "bg-white rounded-xl"
				}   flex w-full items-center  py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
				onClick={handleToggle}
				aria-expanded={isExpanded}
				aria-controls="collapseOne"
			>
				<div>
					<h4
						className={`${
							isExpanded ? "text-white" : "text-primary-dark-blue"
						} text-header-4 leading-36  font-bold`}
					>
						Headquarters
					</h4>
					<p className={`${isExpanded ? "text-white" : "text-primary-grey"} text-base  leading-6 `}>
						3763 W. Dallas St.
					</p>
				</div>
				<span
					className={`ml-auto h-5 w-5 shrink-0 ${
						isExpanded ? "rotate-[-180deg]" : ""
					} fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className={`h-6 w-6 cursor-pointer ${isExpanded ? "stroke-white" : "stroke-accent-blue"}`}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</span>
			</div>

			{isExpanded && (
				<div className="bg-white rounded-b-xl p-8" id="collapseOne" aria-labelledby="headingOne">
					<div className="flex flex-col space-y-4 ">
						<h3 className="text-xl leading-6 text-primary-dark-blue font-bold">Hellena John</h3>
						<p className="text-base leading-6 text-primary-dark-blue ">Software Tester</p>
						<p className="text-base leading-6 text-accent-blue">georgia.young@example.com</p>
						<p className="text-base leading-6 text-primary-dark-blue pb-4 border-b border-solid border-primary-light-grey">
							(808) 555-0111
						</p>
					</div>
					<div className="flex justify-between items-center pt-19">
						<div className="flex gap-x-11">
							<Pencil />
							<span>edit</span>
						</div>
						<div className="flex gap-x-11">
							<Trash />
							<span>delete</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocationAccordion;
