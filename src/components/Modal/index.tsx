import React from "react";

import { FullScreen, Container, Close } from "./styled";

interface Props {
  open: boolean;
  title: string;
  setOpen: (newValue: boolean) => void;
}

export interface IFullScreen {
  open: boolean;
}

export interface IClose {
  onClick?: () => void;
}

export const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title={title}>
        <Close onClick={() => setOpen(false)}>X</Close>

        <h2>{title}</h2>

        {children}
      </Container>
    </FullScreen>
  );
};
