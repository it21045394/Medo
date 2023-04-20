export default interface QueueMedicineData {
	id: number;
	name: string;
	medicine: string;
	status: "Finished" | "Waiting for payment";
}
