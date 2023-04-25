/*
import { Flex, Icon, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import NavItemProps from "./types";

const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Link
      as={RouteLink}
      to={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bgGradient: "linear(to-r, blue.400, purple.400)",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;

*/

import { useState } from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import NavItemProps from "./types";

const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === link);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <Link
      as={RouteLink}
      to={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={handleClick}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bgGradient: "linear(to-r, blue.400, purple.400)",
          color: "white",
        }}
        {...rest}
        bgGradient={isActive ? "linear(to-r, blue.400, purple.400)" : ""}
        color={isActive ? "white" : ""}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
