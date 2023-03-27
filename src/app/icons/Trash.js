import React from "react";

const Trash = ({ strokeColor = "#FF7B92" }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
			<path
				stroke={strokeColor}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M7 9v6m4-6v6M1 5h16m-1 0l-.867 12.142A2 2 0 0113.138 19H4.862a2 2 0 01-1.995-1.858L2 5h14zm-4 0V2a1 1 0 00-1-1H7a1 1 0 00-1 1v3h6z"
			></path>
		</svg>
	);
};

export default Trash;
