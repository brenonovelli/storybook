import React from "react";

import { Container } from "./styled";

export interface Props {
  /**
   * Description property
   */
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#230187",
  color = "#abbabe",
  ...props
}) => {
  return (
    <Container backgroundColor={backgroundColor} color={color} {...props}>
      {children}
    </Container>
  );
};
