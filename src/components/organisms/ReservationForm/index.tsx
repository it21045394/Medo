import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReservationFormProps } from "./types";

function ReservationForm({
  onSubmit,
  onChange,
  date,
  doctor,
  timeSlot,
}: ReservationFormProps) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/schedule?_expand=user", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Date
        </FormLabel>
        <Input
          id="date"
          name="date"
          variant="outline"
          fontSize="sm"
          ms="4px"
          type="date"
          mb="24px"
          size="lg"
          value={date}
          onChange={onChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Select Doctor
        </FormLabel>
        <Select
          name="doctor"
          id="doctor"
          mb="24px"
          onChange={onChange}
          value={doctor}
          placeholder="Select Doctor"
        >
          {doctors.map((item: any, index) => (
            <option key={index} value={item.user.name}>
              {item.user.name} / {item.timeSlot}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl mb="24px">
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Time
        </FormLabel>
        <Input
          id="time"
          name="time"
          variant="outline"
          fontSize="sm"
          ms="4px"
          type="time"
          size="lg"
          value={timeSlot}
          onChange={onChange}
        />
        <FormHelperText>
          Make sure the hours match the doctor&apos;s office hours!
        </FormHelperText>
      </FormControl>

      <Button variant="dark" h="45" color="white" bg="blue.300" type="submit">
        Reserve
      </Button>
    </form>
  );
}

export default ReservationForm;
