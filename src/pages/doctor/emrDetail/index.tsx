import {
  Container,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import SidebarWithHeader from "components/Sidebar";
import EmrHistoryData from "types/EmrHistoryData";
import { useEffect, useState } from "react";
import { formatMoney } from "utils/helpers/formatRupiah";

const EmrDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<EmrHistoryData>({
    id: 0,
    patient: "",
    examinationDate: "",
    diagnosis: "",
    drug: [] || "",
    birthday: "",
    birthplace: "",
    gender: "",
    doctor: "",
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/emr/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch(`http://localhost:3001/billing?idEmr=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPrice(data[0].billing));
  }, []);

  return (
    <>
      <SidebarWithHeader>
        <Container maxW="90vw">
          <Text fontSize="xl" fontWeight="bold" mb="8px">
            Patient EMR details: {data.patient}
          </Text>
          <Link to="/emr-history">
            <Button mb="8px">Back</Button>
          </Link>
          <UnorderedList display="table" listStyleType="none" mt="1rem">
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Doctor Name
              </Text>
              : {data.doctor}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Patient Name
              </Text>
              : {data.patient}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Examination Date
              </Text>
              : {data.examinationDate}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Diagnosis
              </Text>
              : {data.diagnosis}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Date
              </Text>
              :{" "}
              {typeof data.drug === "string" ? data.drug : data.drug.join(", ")}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Gender
              </Text>
              : {data.gender}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Place / date of birth
              </Text>
              : {data.birthplace}, {data.birthday}
            </ListItem>
            <ListItem display="table-row">
              <Text display="table-cell" pr="4em" fontWeight="bold">
                Total payment
              </Text>
              : {formatMoney(price, "Rp")}
            </ListItem>
          </UnorderedList>
        </Container>
      </SidebarWithHeader>
    </>
  );
};

export default EmrDetail;
