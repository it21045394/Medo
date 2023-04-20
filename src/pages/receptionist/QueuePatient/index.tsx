import { Table, TableContainer, Thead, Tbody, Text } from "@chakra-ui/react";
import Rows from "components/TableData/Rows";
import Headers from "components/TableData/Headers";
import SidebarWithHeader from "components/Sidebar";
import { useEffect, useState } from "react";
import PatientScheduleData from "types/PatientScheduleData";

export default function PatientQueue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/patients?status=In queue")
      .then((res) => res.json())
      .then((data) => {
        data
          .sort((a: PatientScheduleData, b: PatientScheduleData) =>
            a.time.localeCompare(b.time)
          )
          .sort((a: PatientScheduleData, b: PatientScheduleData) =>
            a.date.localeCompare(b.date)
          );
        setData(data);
      });
  }, []);

  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Patient Queue List
      </Text>
      <TableContainer overflowX="auto" mb="2rem">
        <Table variant="simple">
          <Thead>
            <Headers headers={["No", "Name", "Date", "Time", "Doctor"]} />
          </Thead>
          <Tbody>
            <Rows data={data} type="schedule" />
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
