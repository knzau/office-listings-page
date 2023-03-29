import React from "react";

const CustomButton = ({ className, onClick, children, ...rest }) => {
	return (
		<button className={className} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default CustomButton;
