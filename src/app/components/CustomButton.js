import React from "react";

const CustomButton = ({ className, children }) => {
	return <button className={className}>{children}</button>;
};

export default CustomButton;
