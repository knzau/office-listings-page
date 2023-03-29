"use client";
import Plus from "./icons/Plus";
import OfficeInfoAccordion from "./components/OfficeInfoAccordion";
import CustomButton from "./components/CustomButton";
import FormContainer from "./components/FormContainer";
import useLocationFormHandlers from "./hooks/useLocationFormHandlers";
import OfficeInfoForm from "./components/OfficeInfoForm";

export default function Home() {
	const {
		isAdd,
		isEdit,
		setIsAdd,
		setIsEdit,
		handleEditLocation,
		handleSubmit,
		handleDelete,
		editLocationInfo,
		locationInfo,
	} = useLocationFormHandlers();

	return (
		<main className="bg-primary-light-grey min-h-screen w-full py-12">
			<div className="w-full flex flex-col justify-center items-center">
				<h1 className="text-display-2 text-center text-accent-blue mb-12 pt-160 leading-none font-light">
					Offices
				</h1>
				<div className="mb-25">
					<CustomButton
						onClick={() => setIsAdd(true)}
						className="bg-accent-blue w-80 text-primary-light-grey font-bold py-4 px-6 rounded-xl shadow-base h-14 flex justify-between items-center mx-auto"
					>
						<span className="font-normal leading-6">Add New Location</span>
						<Plus />
					</CustomButton>
				</div>
				<div className="w-80 flex flex-col gap-y-6 ">
					{isAdd && (
						<FormContainer title="New Location" onClose={() => setIsAdd(false)}>
							<OfficeInfoForm handleSubmit={handleSubmit} />
						</FormContainer>
					)}

					{locationInfo.map((locationData) =>
						isEdit && locationData.id === editLocationInfo.id ? (
							<FormContainer key={locationData.id} title="Edit Location" onClose={() => setIsEdit(false)}>
								<OfficeInfoForm handleSubmit={handleSubmit} editLocationInfo={editLocationInfo} />
							</FormContainer>
						) : (
							<OfficeInfoAccordion
								key={locationData.id}
								onDelete={handleDelete}
								locationData={locationData}
								onEdit={handleEditLocation}
							/>
						)
					)}
				</div>
			</div>
		</main>
	);
}
