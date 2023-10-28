"use client";

import MicrosoftIcon from "@/assets/Microsoft.svg";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const FormHeaderContent = () => {
  return (
    <div>
      <Stack>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"full"}
          flexDirection={"column"}
          marginBottom={"18px"}
        >
          <Image
            src='https://web-staging.fidesdata.internetfolks.in/svg/logo-1x.svg'
            alt='logo'
            width={30}
            height={30}
          />
          <Heading textAlign={"center"} size='sm' marginTop={"10px"}>
            FidesData
          </Heading>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"full"}
          flexDirection={"column"}
        >
          <Heading
            textAlign={"center"}
            size='md'
            fontWeight={"bold"}
            textColor={"#151d48"}
          >
            Welcome Back
          </Heading>
          <Text
            marginTop={"10px"}
            fontWeight={500}
            textColor={"#737791"}
            fontSize='14px'
            textAlign={"center"}
            width={"80%"}
          >
            Signin with the work email and manage all the data connections at
            your work space
          </Text>
        </Box>
        <Stack spacing={10} margin={"12px 0px"}>
          <Button
            borderRadius={"16px"}
            padding={"24px 0px"}
            leftIcon={
              <Image src={MicrosoftIcon} alt='logo' width={20} height={20} />
            }
            borderColor={"#e2e8f0"}
            variant={"outline"}
            color={"black"}
            fontWeight={500}
            fontSize={"sm"}
            _hover={{
              bg: "gray.200",
            }}
          >
            Sign in with Microsoft
          </Button>
        </Stack>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"full"}
          gap={"5px"}
        >
          <Box border={"1px"} borderColor={"gray.100"} width={"full"} />
          <Text
            fontWeight={500}
            textColor={"#151d48"}
            fontSize='16px'
            textAlign={"center"}
          >
            or
          </Text>
          <Box border={"1px"} borderColor={"gray.100"} width={"full"} />
        </Box>
      </Stack>
    </div>
  );
};

export default FormHeaderContent;
