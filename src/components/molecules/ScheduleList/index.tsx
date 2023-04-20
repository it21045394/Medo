import SidebarWithHeader from "components/Sidebar";
import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  ButtonGroup,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Schedule from "types/Schedule";
import { Link } from "react-router-dom";
import { formatMoney } from "utils/helpers/formatRupiah";

export default function AdminSchedule() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const handleDelete = (id: number, type: string) => {
    const confirmedDelete = confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (confirmedDelete) {
      return fetch(`http://localhost:3001/${type}/${id}`, {
        method: "DELETE",
      }).then(() => {
        alert("Successfully cleared the schedule!");
        window.location.reload();
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/schedule?_expand=user`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data);
      });
  }, []);

  return (
    <>
      <SidebarWithHeader>
        <Heading size="lg" mb="3">
          Doctor&apos;s Schedule List
        </Heading>
        <Flex justifyContent="right">
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            mb={4}
            as={RouteLink}
            to="/schedule/create"
          >
            Add New Appointments
          </Button>
        </Flex>
        <Box bg="white" p={5} rounded="md" boxShadow="base">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Doctor&apos;s Name</Th>
                  <Th>Time Slot</Th>
                  <Th>Fee</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {schedules.map((schedule) => (
                  <Tr key={schedule.id}>
                    <Td>{schedule.user?.name}</Td>
                    <Td>{schedule.timeSlot}</Td>
                    <Td>{formatMoney(schedule.fee, "Rp")}</Td>
                    <Td>
                      <ButtonGroup spacing={2}>
                        <Tooltip label="Delete Data">
                          <Button
                            colorScheme="red"
                            size="sm"
                            onClick={() =>
                              handleDelete(schedule.id, "schedule")
                            }
                          >
                            <Icon as={DeleteIcon} />
                          </Button>
                        </Tooltip>
                        <Tooltip label="Edit Data">
                          <Link to={`/schedule/${schedule.id}`}>
                            <Button colorScheme="green" size="sm">
                              <Icon as={EditIcon} />
                            </Button>
                          </Link>
                        </Tooltip>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SidebarWithHeader>
    </>
  );
}
