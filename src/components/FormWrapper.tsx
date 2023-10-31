import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  FormControlProps,
  FormLabelProps,
} from "@chakra-ui/react";

export interface IFormWrapperProps {
  label?: React.ReactNode;
  error?: string;
  variant?: string;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  isInvalid: boolean;
  touched?: any;
  labelProps?: FormLabelProps;
}

const FromWrapper = ({
  label,
  variant,
  isInvalid,
  error,
  children,
  helperText,
  wrapperProps = {},
  labelProps = {},
  touched,
}: IFormWrapperProps) => {
  return (
    <FormControl
      variant={variant}
      width='100%'
      minWidth='220px'
      mb='24px'
      isInvalid={isInvalid}
      {...wrapperProps}
    >
      {label && (
        <FormLabel
          color={"#737791"}
          fontWeight={600}
          fontSize={"0.875rem"}
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup width='100%' alignItems='center'>
        {children}
      </InputGroup>
      {error && touched && (
        <FormErrorMessage color='red.500' fontSize='.75rem'>
          {error}
        </FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText fontSize='0.75rem' color='text.formLabel'>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FromWrapper;
