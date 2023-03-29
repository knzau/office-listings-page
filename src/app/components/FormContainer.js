import React from "react";

const FormContainer = ({ title, children, onClose }) => {
	return (
		<div className="rounded-xl w-full shadow-base py-4 px-5 bg-white">
			<div className="flex justify-between items-center">
				<h2 className="text-base font-bold text-primary-dark-blue">{title}</h2>
				<button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-pr">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6 fill-primary-grey"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div className="mt-4">{children}</div>
		</div>
	);
};

export default FormContainer;
