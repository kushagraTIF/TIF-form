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
import FormHeaderContent from "./FormHeaderContent";
import FormInput from "./FormInput";

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
              {/* <FormControl id='email'>
                <FormLabel
                  textColor={"#737791"}
                  fontSize={"0.875rem"}
                  fontWeight={600}
                >
                  Email address
                </FormLabel>
                <Input
                  isRequired
                  borderRadius={"10px"}
                  fontWeight={400}
                  padding={"20px 15px"}
                  fontSize={"15px"}
                  type='email'
                  placeholder='Work mail address (eg: joe@example.com)'
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel
                  textColor={"#737791"}
                  fontSize={"0.875rem"}
                  fontWeight={600}
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    borderRadius={"10px"}
                    fontWeight={400}
                    padding={"20px 15px"}
                    fontSize={"15px"}
                    type={passwordType}
                  />
                  <InputRightElement onClick={handleToggle} cursor={"pointer"}>
                    {passwordType === "password" ? (
                      <Image src={LockIcon} alt='logo' width={20} height={20} />
                    ) : (
                      <Image
                        src={LockIconOpen}
                        alt='logo'
                        width={20}
                        height={20}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl> */}
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
                  type='password'
                  label='Password'
                  name='password'
                  value={values?.password}
                  error={errors?.password}
                  touched={touched?.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
