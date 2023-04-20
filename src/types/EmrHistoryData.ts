export default interface EmrHistoryData {
	id: number;
	patient: string;
	examinationDate: string;
  diagnosis: string;
  drug: string | string[];
  gender: string;
  birthplace: string;
  birthday: string;
  doctor: string;
}
