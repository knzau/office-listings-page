import React, { useState } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { defaultInputData, inputsData } from "../utils";

const OfficeInfoForm = ({ handleSubmit, editLocationInfo = defaultInputData }) => {
	const [values, setValues] = useState(editLocationInfo);
	const [isFormChanged, setIsFormChanged] = useState(false);

	const onChange = (e) => {
		e.persist();
		setValues({ ...values, [e.target.name]: e.target.value });
		setIsFormChanged(true);
	};

	return (
		<div>
			<form onSubmit={(event) => handleSubmit(event, values)} className="flex flex-col">
				{inputsData.map((input) => {
					return (
						<div key={input.id}>
							{input.id === "address" ? (
								<div key={input.id}>
									<FormInput {...input} value={values[input.name]} onChange={onChange} />
									<p className="text-text-meta-title uppercase text-accent-blue border-b mb-6 border-primary-light-grey pb-4">
										Contact information
									</p>
								</div>
							) : (
								<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
							)}
						</div>
					);
				})}

				<CustomButton
					disabled={!isFormChanged}
					type="submit"
					className={`${
						isFormChanged ? "bg-accent-blue cursor-pointer" : "bg-primary-grey cursor-not-allowed"
					} w-20 text-primary-light-grey font-bold py-2 px-6 rounded-xl shadow-base h-14 flex items-center`}
				>
					Save
				</CustomButton>
			</form>
		</div>
	);
};

export default OfficeInfoForm;
