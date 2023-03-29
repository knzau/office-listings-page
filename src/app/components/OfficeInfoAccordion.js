"use client";
import React, { useState } from "react";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";
import AccordionContainer from "./AccordionContainer";

const OfficeInfoAccordion = ({ onDelete, locationData, onEdit }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const { title, address, fullName, jobPosition, email, phone, id } = locationData;

	const HeaderInfo = () => (
		<div>
			<h4
				className={`${
					isExpanded ? "text-white" : "text-primary-dark-blue"
				} text-header-4 leading-36  font-bold`}
			>
				{title}
			</h4>
			<p className={`${isExpanded ? "text-white" : "text-primary-grey"} text-base  leading-6 `}>{address}</p>
		</div>
	);

	return (
		<div key={id}>
			<AccordionContainer HeaderInfo={<HeaderInfo />} setIsExpanded={setIsExpanded} isExpanded={isExpanded}>
				<div className="bg-white rounded-b-xl p-8" id="collapseOne" aria-labelledby="headingOne">
					<div className="flex flex-col space-y-4 ">
						<h3 className="text-xl leading-6 text-primary-dark-blue font-bold">{fullName}</h3>
						<p className="text-base leading-6 text-primary-dark-blue ">{jobPosition}</p>
						<p className="text-base leading-6 text-accent-blue">{email}</p>
						<p className="text-base leading-6 text-primary-dark-blue pb-4 border-b border-solid border-primary-light-grey">
							{phone}
						</p>
					</div>
					<div className="flex justify-between items-center pt-19">
						<div
							className="flex gap-x-11 cursor-pointer items-center text-primary-grey"
							onClick={() => onEdit(locationData)}
						>
							<Pencil className="fill-primary-grey" />
							<span className="uppercase text-xs">edit</span>
						</div>
						<div className="flex gap-x-11 cursor-pointer items-center" onClick={() => onDelete(id)}>
							<Trash />
							<span className="uppercase text-accent-red text-xs">delete</span>
						</div>
					</div>
				</div>
			</AccordionContainer>
		</div>
	);
};

export default OfficeInfoAccordion;
