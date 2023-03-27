import React from "react";
import Input from "./Input";
import CustomInput from "./CustomInput";

const LocationForm = ({ props }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		// handle form submission
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<CustomInput label="Title" type="text" id="title" name="title" required />
			<CustomInput label="Enter the address" type="text" id="address" name="address" required />
			<p className="text-text-meta-title uppercase text-accent-blue border-b mb-6 border-primary-light-grey pb-4">
				Contact information
			</p>
			<CustomInput label="Full Name" type="text" id="fullName" name="fullName" required />
			<CustomInput label="Job Position" type="text" id="jobPosition" name="jobPosition" required />
			<CustomInput label="Email Address" type="email" id="email" name="email" required />
			<CustomInput label="Phone" type="tel" id="phone" name="phone" required />

			<button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">
				Submit
			</button>
		</form>
	);
};

export default LocationForm;
