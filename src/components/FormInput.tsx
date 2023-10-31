import React from "react";
import { Input, InputLeftAddon, InputRightElement } from "@chakra-ui/react";
import FormWrapper from "./FormWrapper";
import { IFormInputProps } from "@/interface/form";

const FormInput = React.forwardRef<HTMLInputElement, IFormInputProps>(
  (
    {
      variant,
      name,
      label,
      placeholder,
      type,
      value,
      onChange,
      onBlur,
      error,
      touched,
      inputProps = {},
      children,
      helperText,
      wrapperProps = {},
      labelProps = {},
      leftAddOn,
      rightAddOn,
    },
    ref
  ) => {
    return (
      <FormWrapper
        variant={variant}
        isInvalid={Boolean(error && touched)}
        wrapperProps={wrapperProps}
        helperText={helperText}
        label={label}
        touched={touched}
        error={error as string}
        labelProps={labelProps}
      >
        {leftAddOn && (
          <InputLeftAddon h='auto' py='10px'>
            {leftAddOn}
          </InputLeftAddon>
        )}
        {/* {rightAddOn && (
          <InputRightElement minHeight={"50px"} height={"auto"}>
            {rightAddOn}
          </InputRightElement>
        )} */}
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          // styles
          width='100%'
          outline={"2px solid #0000"}
          maxHeight='none !important'
          minW='272px'
          minHeight={"50px"}
          height={"auto"}
          fontWeight='400'
          fontSize={"15px"}
          paddingY={"16px"}
          paddingX={"32px"}
          border='1px solid #eaebf1'
          backgroundColor={"#fff"}
          bg='white'
          borderRadius='10px'
          focusBorderColor='#3212BF'
          errorBorderColor='red.500'
          _placeholder={{
            color: "gray.500",
            fontSize: "15px",
          }}
          ref={ref}
          {...inputProps}
        />

        {children}
      </FormWrapper>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
