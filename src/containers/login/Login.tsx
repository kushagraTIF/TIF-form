"use client";

import LockIcon from "@/assets/Lock.svg";
import LockIconOpen from "@/assets/LockOpen.svg";
import { AppButton } from "@/components/AppButton";
import FormHeaderContent from "@/containers/login/FormHeaderContent";
import FormInput from "@/components/FormInput";
import { ILoginDetails } from "@/interface/form";
import { loginSchema } from "@/schemas";
import { Box, Flex, Heading, InputRightElement, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import Image from "next/image";
import { HTMLInputTypeAttribute, useState } from "react";

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
      onSubmit: (values, action) => {
        console.log({ values });
        action.resetForm();
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
        height={"100vh"}
        width={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
        overflowX={"hidden"}
        bg={"#fafbfc"}
      >
        <Stack mx={"auto"} maxW={"xl"} py={2} px={6}>
          <Box
            bg={"#ffff"}
            boxShadow={"none"}
            border={" 1px solid #eaebf1"}
            borderRadius={"20px"}
            minWidth={"600px"}
            width={"600px"}
            p={"30px"}
          >
            <FormHeaderContent />
            <Stack marginTop={"20px"} spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormInput
                  isRequired={true}
                  type='email'
                  label='Email Address'
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
                >
                  <InputRightElement minHeight={"50px"} height={"auto"}>
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
                  </InputRightElement>
                </FormInput>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"full"}
                  marginBottom={"20px"}
                >
                  <Heading
                    fontWeight={400}
                    textAlign={"center"}
                    textColor={"#1c294a"}
                    fontSize={"15px"}
                  >
                    Don't have an account ?
                  </Heading>
                  <Heading
                    fontSize={"15px"}
                    cursor={"pointer"}
                    textColor={"#151d48"}
                    paddingLeft={"5px"}
                    textAlign={"center"}
                    fontWeight={600}
                    _hover={{
                      textDecoration: "underline",
                      textUnderlineOffset: "1px",
                    }}
                  >
                    Register
                  </Heading>
                </Box>
                <Stack spacing={10}>
                  <AppButton type='submit'>Sign in</AppButton>
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
