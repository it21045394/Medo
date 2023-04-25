export type RegisterProps = {
  nameValue: string;
  genderValue: string;
  birthplaceValue: string;
  birthdayValue: string;
  phoneValue: number;
  emailValue: string;
  passValue: string;
  secondPassValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}