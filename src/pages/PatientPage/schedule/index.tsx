import { Text, TableContainer, Table, Thead, Tbody } from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";
import Headers from "components/TableData/Headers";
import { useEffect, useState } from "react";
import Rows from "components/TableData/Rows";
import PatientScheduleData from "types/PatientScheduleData";
import useAuth from "hooks/useAuth";

export default function Schedule() {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3001/patients?name=${auth.name}`)
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
    <>
      <SidebarWithHeader>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Treatment Queue Schedule
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
    </>
  );
}
