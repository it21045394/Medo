export type ReservationFormProps = {
  onChange: React.ChangeEventHandler<any>;
  date: string;
  time: string;
  doctor: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}