import styled from "styled-components";
import {
  darken,
  desaturate,
  lighten,
  readableColor,
  transparentize,
} from "polished";

import { Props } from "./index";

export const Container = styled.button<Props>`
  padding: 16px 40px;
  border-radius: 4px;
  border: ${(props) =>
    props.outlined ? `2px solid ${props.backgroundColor}` : "none"};

  color: ${({ color }: Props) =>
    readableColor(color as string, "#abbebe", "#011016")};
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${(props) =>
    props.outlined ? "transparent" : props.backgroundColor};

  cursor: pointer;

  transition: ease-in-out 0.15s all;

  &:disabled {
    background-color: ${(props) =>
      desaturate(0.5, props.backgroundColor as string)};
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    :not(:disabled) {
      box-shadow: 0px 8px 8px ${transparentize(0.25, "#011016")};
      border-color: transparent;
      background-color: ${(props) =>
        props.outlined
          ? props.backgroundColor
          : lighten(0.03, props.backgroundColor as string)};
    }
  }

  :active {
    :not(:disabled) {
      box-shadow: 0px 8px 8px ${transparentize(0.25, "#011016")};
      background-color: ${(props) =>
        darken(0.03, props.backgroundColor as string)};
    }
  }
`;
