import React, { useRef, useState } from "react";

const FormInput = (props) => {
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const [isValid, setIsValid] = useState(true);
	const [focused, setFocused] = useState(false);

	function handleInput(event) {
		setIsValid(event.target.validity.valid);
	}

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className="flex flex-col mb-4">
			<label htmlFor={id} className="mb-2">
				{label}
			</label>
			<input
				id={id}
				{...inputProps}
				className="p-2 border border-gray-400 rounded"
				onChange={onChange}
				onInput={handleInput}
				onBlur={handleFocus}
				focused={focused.toString()}
			/>
			{!isValid && focused && <span className="text-xs p-1 text-accent-red">{errorMessage}</span>}
		</div>
	);
};

export default FormInput;
