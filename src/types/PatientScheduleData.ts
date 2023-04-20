export default interface PatientScheduleData {
  id: number;
  name: string;
  patientId: number;
  time: string;
  date: string;
  doctor:string;
  status: "Finished" | "In queue" | "Checked" | "Waiting for payment";
}