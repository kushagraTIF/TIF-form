import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/ButtonStyles";

export const theme = extendTheme({
  components: { Button: buttonTheme },
});
