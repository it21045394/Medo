import { Table, TableContainer, Tbody, Text, Thead } from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";
import Headers from "components/TableData/Headers";
import { useEffect, useState } from "react";
import Rows from "components/TableData/Rows";
import { QUEUE_TYPE_MEDICINE } from "./types/queue";

const QueueMedicine = () => {
  const [billingQueue, setBillingQueue] = useState([]);
  const [queueDone, setQueueDone] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/patients?status=Waiting for payment", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBillingQueue(data));

    fetch("http://localhost:3001/patients?status=Finished", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setQueueDone(data));
  }, []);

  return (
    <>
      <SidebarWithHeader>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Queue List for Medicine Payment
        </Text>
        <TableContainer overflowX="auto" mb="2rem">
          <Table variant="simple">
            <Thead>
              <Headers headers={["No", "Name", "Status", "Action"]} />
            </Thead>
            <Tbody>
              <Rows data={billingQueue} type={QUEUE_TYPE_MEDICINE} />
            </Tbody>
          </Table>
        </TableContainer>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Completed Drug Payment Queuing List
        </Text>
        <TableContainer overflowX="auto" mb="2rem">
          <Table variant="simple">
            <Thead>
              <Headers headers={["No", "Name", "Status", "Action"]} />
            </Thead>
            <Tbody>
              <Rows data={queueDone} type={QUEUE_TYPE_MEDICINE} />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default QueueMedicine;
