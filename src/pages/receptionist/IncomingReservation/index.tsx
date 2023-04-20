import { Text, Table, TableContainer, Thead, Tbody } from "@chakra-ui/react";
import Headers from "components/TableData/Headers";
import PatientScheduleData from "types/PatientScheduleData";
import SidebarWithHeader from "components/Sidebar";
import Rows from "components/TableData/Rows";
import { useEffect, useState } from "react";

export default function IncomingReservation() {
  const [data, setData] = useState<PatientScheduleData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/patients?status=Checked")
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
        Patient Reservation List
      </Text>
      <TableContainer overflowX="auto" mb="2rem">
        <Table variant="simple">
          <Thead>
            <Headers headers={["No", "Name", "Date", "Time", "Action"]} />
          </Thead>
          <Tbody>
            <Rows data={data} type="approval" />
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
