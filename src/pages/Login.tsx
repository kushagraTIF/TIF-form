"use client";

import { ILoginDetails } from "@/interface/form";
import { loginSchema } from "@/schemas";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { HTMLInputTypeAttribute, useState } from "react";
import FormHeaderContent from "@/components/FormHeaderContent";
import FormInput from "@/components/FormInput";
import LockIcon from "@/assets/Lock.svg";
import LockIconOpen from "@/assets/LockOpen.svg";
import Image from "next/image";

const Login = () => {
  const [passwordType, setPasswordType] =
    useState<HTMLInputTypeAttribute>("password");

  const { handleChange, errors, touched, handleBlur, handleSubmit, values } =
    useFormik<ILoginDetails>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log({ values });
      },
    });

  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        overflowX={"hidden"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack mx={"auto"} maxW={"xl"} py={2} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={7}
          >
            <FormHeaderContent />
            <Stack marginTop={"20px"} spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormInput
                  isRequired={true}
                  type='email'
                  label='Email'
                  name='email'
                  placeholder='Work mail address (eg: joe@example.com)'
                  value={values?.email}
                  error={errors?.email}
                  touched={touched?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormInput
                  isRequired={true}
                  type={passwordType}
                  label='Password'
                  name='password'
                  value={values?.password}
                  error={errors?.password}
                  touched={touched?.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rightAddOn={
                    <Image
                      onClick={handleToggle}
                      src={
                        passwordType === "password" ? LockIcon : LockIconOpen
                      }
                      alt='logo'
                      width={20}
                      height={20}
                      style={{ cursor: "pointer" }}
                    />
                  }
                />

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"full"}
                  marginBottom={"18px"}
                >
                  <Heading
                    fontWeight={400}
                    textAlign={"center"}
                    textColor={"#1c294a"}
                    size='sm'
                  >
                    Don't have an account ?
                  </Heading>
                  <Heading
                    cursor={"pointer"}
                    textColor={"#151d48"}
                    paddingLeft={"5px"}
                    textAlign={"center"}
                    size='sm'
                  >
                    Register
                  </Heading>
                </Box>
                <Stack spacing={10}>
                  <Button
                    type='submit'
                    padding={"25px"}
                    margin={"0 auto"}
                    bg={"#151d48"}
                    color={"white"}
                    _hover={{
                      bg: "#151d48",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
