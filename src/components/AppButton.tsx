import { Button } from "@chakra-ui/button";
import React, { ReactElement, ReactNode } from "react";
interface AppButtonProps {
  children: ReactNode;
  className?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  variant?: "solid";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button";
}

export const AppButton = ({
  children,
  leftIcon,
  rightIcon,
  variant,
  onClick,
  type,
}: AppButtonProps) => {
  return (
    <>
      <Button
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </>
  );
};
