const AccordionContainer = ({ HeaderInfo, children, setIsExpanded, isExpanded }) => {
	return (
		<div className="rounded-xl w-full shadow-base">
			<div
				className={`${
					isExpanded ? "bg-primary-grey rounded-t-xl shadow-inner-base" : "bg-white rounded-xl"
				}   flex w-full items-center  py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
				onClick={() => setIsExpanded(!isExpanded)}
				aria-expanded={isExpanded}
				aria-controls="collapseOne"
			>
				<div>{HeaderInfo}</div>
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

			{isExpanded && <>{children}</>}
		</div>
	);
};

export default AccordionContainer;
