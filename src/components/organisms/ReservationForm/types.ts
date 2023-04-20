export type ReservationFormProps = {
  onChange: React.ChangeEventHandler<any>;
  date: string;
  timeSlot: string;
  doctor: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}