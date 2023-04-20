/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  Checkbox,
  Stack,
  FormHelperText,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import SidebarWithHeader from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PatientScheduleData from "types/PatientScheduleData";
import Medicine from "types/Medicine";
import EmrHistoryData from "types/EmrHistoryData";
import useAuth from "hooks/useAuth";

const CreateNewEmr = () => {
  const [data, setData] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(
      `http://localhost:3001/patients?status=In queue&doctor=${auth.name}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("http://localhost:3001/medicine", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      patient: "",
      diagnosis: "",
      drug: [],
      examinationDate: "",
      doctor: auth.name,
    },
    onSubmit: async (values) => {
      const users = await fetch(
        `http://localhost:3001/users?name=${values.patient}`,
        {
          method: "GET",
        }
      );
      const user = await users.json();
      const { birthday, birthplace, gender, name } = user[0];

      const emr = await fetch("http://localhost:3001/emr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, birthday, birthplace, gender }),
      });
      const emrData = (await emr.json()) as unknown as EmrHistoryData;
      const idEmr = await emrData.id;
      let billing = 0;
      let url = "http://localhost:3001/medicine";

      if (values.drug.length > 0) {
        url += "?";

        for (let i = 0; i < values.drug.length; i++) {
          url += `name=${values.drug[i]}&`;
        }

        const medicine = await fetch(url, {
          method: "GET",
        });
        const medicineData = await medicine.json();

        for (let i = 0; i < medicineData.length; i++) {
          billing += medicineData[i].price;
        }

        const doctor = await fetch(
          `http://localhost:3001/schedule?userId=${auth.id}`,
          {
            method: "GET",
          }
        );
        const doctorData = await doctor.json();
        const doctorBill = doctorData[0].fee;
        billing += doctorBill;

        const bill = await fetch("http://localhost:3001/billing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idEmr, billing, name }),
        });

        const patients = await fetch(
          `http://localhost:3001/patients?name=${values.patient}&date=${values.examinationDate}`,
          {
            method: "GET",
          }
        );
        const patientData = await patients.json();
        const { id } = patientData[0];
        const updatePatient = await fetch(
          `http://localhost:3001/patients/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "Waiting for payment" }),
          }
        );

        navigate("/emr-history");
      } else {
        const medicine = await fetch(
          `http://localhost:3001/medicine?name=${values.drug[0]}`,
          {
            method: "GET",
          }
        );
        const medicineData = await medicine.json();
        billing = await medicineData[0].price;

        const bill = await fetch("http://localhost:3001/billing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idEmr, billing, name }),
        });

        const patients = await fetch(
          `http://localhost:3001/patients?name=${values.patient}&date=${values.examinationDate}`,
          {
            method: "GET",
          }
        );
        const patientData = await patients.json();
        const { id } = await patientData[0];
        const updatePatient = await fetch(
          `http://localhost:3001/patients/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "Waiting for payment" }),
          }
        );

        navigate("/emr-history");
      }
    },
  });

  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="22px">
        Create a New EMR
      </Text>

      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Patient&apos;s name
          </FormLabel>
          <Select
            name="patient"
            id="patient"
            mb="24px"
            onChange={formik.handleChange}
            value={formik.values.patient}
          >
            <option value="">Select a patient</option>
            {data.map((item: PatientScheduleData, index) => (
              <option key={index} value={item.name}>
                {item.name} - {item.date}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Diagnosis
          </FormLabel>
          <Textarea
            id="diagnosis"
            name="diagnosis"
            variant="outline"
            fontSize="sm"
            ms="4px"
            placeholder="diagnosis"
            mb="24px"
            size="lg"
            value={formik.values.diagnosis}
            onChange={formik.handleChange}
            isRequired
          />
        </FormControl>

        <FormControl mb="24px">
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Drug Name
          </FormLabel>
          <Stack spacing={5} paddingInline={2} direction="row">
            {medicine.map((item: Medicine, index) => (
              <Checkbox
                key={index}
                value={item.name}
                name="drug"
                id="drug"
                onChange={formik.handleChange}
              >
                {item.name}
              </Checkbox>
            ))}
          </Stack>
        </FormControl>

        <FormControl mb="24px">
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Examination Date
          </FormLabel>
          <Input
            id="examinationDate"
            name="examinationDate"
            variant="outline"
            fontSize="sm"
            ms="4px"
            type="date"
            placeholder="Diagnosis"
            size="lg"
            value={formik.values.examinationDate}
            onChange={formik.handleChange}
            isRequired
          />
          <FormHelperText>Make sure the date is correct!</FormHelperText>
        </FormControl>

        <Button
          variant="dark"
          fontWeight="bold"
          h="45"
          mb="24px"
          color="white"
          bg="blue.300"
          type="submit"
        >
          Save
        </Button>
      </form>
    </SidebarWithHeader>
  );
};

export default CreateNewEmr;
