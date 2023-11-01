import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  padding: "25px",
  margin: "0 auto",
  background: "#151d48",
  width: "100%",
  color: "#ffff",
  _hover: {
    background: "#151d48",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid },
});
