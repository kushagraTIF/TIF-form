import React from "react";
import {
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
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
        {rightAddOn && (
          <InputRightElement h='auto' py='10px'>
            {rightAddOn}
          </InputRightElement>
        )}
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          // styles
          width='100%'
          maxHeight='none !important'
          minW='272px'
          height='45px'
          fontWeight='500'
          px='20px'
          border='1px solid #e2e8f0'
          bg='white'
          borderRadius='8px'
          focusBorderColor='#3212BF'
          errorBorderColor='red.500'
          _placeholder={{
            color: "blackAlpha.400",
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
