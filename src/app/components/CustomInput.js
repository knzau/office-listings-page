import React from "react";

const CustomInput = ({ label, type, id, name, required }) => {
	return (
		<div className="flex flex-col mb-4">
			<label htmlFor={id} className="mb-2">
				{label}
			</label>
			<input type={type} id={id} name={name} required={required} className="p-2 border border-gray-400 rounded" />
		</div>
	);
};

export default CustomInput;
