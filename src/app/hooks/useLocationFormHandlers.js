import { useState } from "react";
import { locationMockData } from "../utils";

const useLocationFormHandlers = () => {
	const [locationInfo, setLocationInfo] = useState(locationMockData);
	const [isAdd, setIsAdd] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editLocationInfo, setEditLocationInfo] = useState({});

	const handleEditLocation = (data) => {
		setIsEdit(true);
		setEditLocationInfo(data);
	};

	const handleDelete = (id) => {
		setLocationInfo((currentData) => currentData.filter((data) => data.id !== id));
	};

	const handleSubmit = async (event, values) => {
		event.preventDefault();

		if (values.id) {
			setLocationInfo((locationInfo) =>
				locationInfo.map((data) => (data.id === values.id ? { ...values } : data))
			);
			await setTimeout(setIsEdit(false));
		} else {
			setLocationInfo((locationInfo) => [...locationInfo, { ...values, id: crypto.randomUUID() }]);
			await setTimeout(setIsAdd(false));
		}
	};

	return {
		isAdd,
		isEdit,
		setIsEdit,
		setIsAdd,
		handleEditLocation,
		handleSubmit,
		handleDelete,
		editLocationInfo,
		locationInfo,
	};
};

export default useLocationFormHandlers;
