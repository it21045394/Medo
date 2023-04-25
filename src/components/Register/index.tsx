/*

import PasswordStrengthBar from "react-password-strength-bar";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { RegisterProps } from "./types";

const Register = ({
  nameValue,
  genderValue,
  birthplaceValue,
  birthdayValue,
  phoneValue,
  emailValue,
  passValue,
  secondPassValue,
  onChange,
  onSubmit,
}: RegisterProps) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");

  return (
    <Flex position="relative" bgGradient="linear(to-r, blue.200, purple.200)">
      <Flex
        h="auto"
        p="24px"
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
          <Flex
            zIndex="2"
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Register
            </Text>
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Name
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Full Name"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={nameValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Gender
                </FormLabel>
                <RadioGroup id="gender" value={genderValue}>
                  <Stack direction="row">
                    <Radio value="Male" onChange={onChange} name="gender">
                      Male
                    </Radio>
                    <Radio value="Female" onChange={onChange} name="gender">
                      Female
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" mt="24px" fontWeight="medium">
                  Place of Birth
                </FormLabel>
                <Input
                  id="birthplace"
                  name="birthplace"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Birth Place"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthplaceValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Date of Birth
                </FormLabel>
                <Input
                  id="birthday"
                  name="birthday"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="date"
                  placeholder="Date of Birth"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthdayValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Contact Number
                </FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="number"
                  placeholder="Contact Number"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={phoneValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="email"
                  placeholder="Email"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={emailValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Password"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={passValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Confirm password
                </FormLabel>
                <Input
                  id="password2"
                  name="password2"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Confirm password"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={secondPassValue}
                />
              </FormControl>

              <Button
                variant="dark"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                color="white"
                bgGradient="linear(to-r, blue.400, purple.400)"
                type="submit"
              >
                Register
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already Have an account?
                <Link
                  color={titleColor}
                  as={RouteLink}
                  ms="5px"
                  to="/"
                  fontWeight="bold"
                >
                  Enter
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;


*/

/*

import PasswordStrengthBar from "react-password-strength-bar";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { RegisterProps } from "./types";

const Register = ({
  nameValue,
  genderValue,
  birthplaceValue,
  birthdayValue,
  phoneValue,
  emailValue,
  passValue,
  secondPassValue,
  onChange,
  onSubmit,
}: RegisterProps) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");

  return (
    <Flex position="relative" bgGradient="linear(to-r, blue.200, purple.200)">
      <Flex
        h="auto"
        p="24px"
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
          <Flex
            zIndex="2"
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Register
            </Text>
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Name
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Full Name"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={nameValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Gender
                </FormLabel>
                <RadioGroup id="gender" value={genderValue}>
                  <Stack direction="row">
                    <Radio value="Male" onChange={onChange} name="gender">
                      Male
                    </Radio>
                    <Radio value="Female" onChange={onChange} name="gender">
                      Female
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" mt="24px" fontWeight="medium">
                  Place of Birth
                </FormLabel>
                <Input
                  id="birthplace"
                  name="birthplace"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Birth Place"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthplaceValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Date of Birth
                </FormLabel>
                <Input
                  id="birthday"
                  name="birthday"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="date"
                  placeholder="Date of Birth"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthdayValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Contact Number
                </FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="number"
                  placeholder="Contact Number"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={phoneValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="email"
                  placeholder="Email"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={emailValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Password"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={passValue}
                />
                <PasswordStrengthBar password={passValue} />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Confirm password
                </FormLabel>
                <Input
                  id="password2"
                  name="password2"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Confirm password"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={secondPassValue}
                />
              </FormControl>

              <Button
                variant="dark"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                color="white"
                bgGradient="linear(to-r, blue.400, purple.400)"
                type="submit"
              >
                Register
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already Have an account?
                <Link
                  color={titleColor}
                  as={RouteLink}
                  ms="5px"
                  to="/"
                  fontWeight="bold"
                >
                  Enter
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;


*/

import zxcvbn from "zxcvbn";
import React, { useState } from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { RegisterProps } from "./types";
import PasswordStrengthBar from "react-password-strength-bar";

const Register = ({
  nameValue,
  genderValue,
  birthplaceValue,
  birthdayValue,
  phoneValue,
  emailValue,
  passValue,
  secondPassValue,
  onChange,
  onSubmit,
}: RegisterProps) => {
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const toasts = useToast();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "password") {
      const passwordStrength = zxcvbn(value);
      setIsPasswordStrong(passwordStrength.score >= 3);
    }
    onChange(event);
  };

  const passwordCriteria =
    "Password must be 8 characters long and contain numbers, uppercase, lowercase and special character.";
  const description =
    passwordCriteria.length > 110
      ? passwordCriteria.substring(0, 110) + "..."
      : passwordCriteria;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isPasswordStrong) {
      toasts({
        title: "Password not strong enough",
        description: description,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onSubmit(event);
  };

  return (
    <Flex position="relative" bgGradient="linear(to-r, blue.200, purple.200)">
      <Flex
        h="auto"
        p="24px"
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
          <Flex
            zIndex="2"
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Register
            </Text>
            <form onSubmit={handleFormSubmit}>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Name
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Full Name"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={nameValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Gender
                </FormLabel>
                <RadioGroup id="gender" value={genderValue}>
                  <Stack direction="row">
                    <Radio value="Male" onChange={onChange} name="gender">
                      Male
                    </Radio>
                    <Radio value="Female" onChange={onChange} name="gender">
                      Female
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" mt="24px" fontWeight="medium">
                  Place of Birth
                </FormLabel>
                <Input
                  id="birthplace"
                  name="birthplace"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  placeholder="Birth Place"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthplaceValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Date of Birth
                </FormLabel>
                <Input
                  id="birthday"
                  name="birthday"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="date"
                  placeholder="Date of Birth"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={birthdayValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Contact Number
                </FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="number"
                  placeholder="Contact Number"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={phoneValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="email"
                  placeholder="Email"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={emailValue}
                />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Password"
                  mb="24px"
                  size="lg"
                  onChange={handlePasswordChange}
                  value={passValue}
                />
                <PasswordStrengthBar password={passValue} />
              </FormControl>

              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="medium">
                  Confirm password
                </FormLabel>
                <Input
                  id="password2"
                  name="password2"
                  variant="outline"
                  fontSize="sm"
                  ms="4px"
                  type="password"
                  placeholder="Confirm password"
                  mb="24px"
                  size="lg"
                  onChange={onChange}
                  value={secondPassValue}
                />
              </FormControl>

              <Button
                variant="dark"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                color="white"
                bgGradient="linear(to-r, blue.400, purple.400)"
                type="submit"
              >
                Register
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already Have an account?
                <Link
                  color={titleColor}
                  as={RouteLink}
                  ms="5px"
                  to="/"
                  fontWeight="bold"
                >
                  Enter
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
