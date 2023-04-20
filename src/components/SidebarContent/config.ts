import {
  FiHome,
  FiBook,
  FiFilePlus,
  FiCalendar,
  FiUsers,
  FiList,
  FiClock,
  FiDroplet,
} from "react-icons/fi";
import {
  GrHistory
} from "react-icons/gr";

export const DoctorLinks = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "EMR List", icon: FiBook, href: "/emr-history" },
  { name: "Add EMR", icon: FiFilePlus, href: "/add-emr" },
];

export const PatientLinks = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Reservation Form", icon: FiCalendar, href: "/form-reservasi" },
  { name: "EMR History", icon: FiBook, href: "/my-emr" },
  { name: 'Reservation History', icon: GrHistory, href: '/reservation-history' },
];

export const AdminLinks = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Drugs", icon: FiList, href: "/medicine" },
  { name: "Timetable", icon: FiClock, href: "/schedule" },
  { name: "Registered Users", icon: FiUsers, href: "/user" },
];

export const ReceptionistLinks = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Patient Queue", icon: FiUsers, href: "/queue-patient" },
  { name: "Drug Queue", icon: FiDroplet, href: "/queue-medicine" },
];
