import {
  FormControlProps,
  FormLabelProps,
  InputProps,
  StyleProps,
} from "@chakra-ui/react";
import { FormikErrors, FormikTouched } from "formik";
import { HTMLInputTypeAttribute } from "react";

export interface IFormInputProps {
  name: string;
  variant?: string;
  leftAddOn?: React.ReactNode;
  label?: React.ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  inputProps?: InputProps;
  wrapperProps?: FormControlProps;
  labelProps?: FormLabelProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode | string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  formProps?: StyleProps;
}

export interface ILoginDetails {
  email: string;
  password: string;
}
