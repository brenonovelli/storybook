import styled from "styled-components";
import { transparentize } from "polished";

import { ILabel } from "./index";

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  > input {
    background-color: #011016;
    border: 1px solid ${transparentize(0.9, "#abbebe")};
    border-radius: 4px;
    padding: 16px;
    padding-left: ${(props) => (props.icon ? "40px" : "16px")};
    color: #abbebe;
    font-size: 16px;
    transition: 180ms ease-in-out;
    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
    ~ svg {
      fill: rgba(255, 255, 255, 0.2);
      position: absolute;
      left: 12px;
      top: 16px;
      width: 24px;
      height: 24px;
      transition: 180ms ease-in-out;
    }
    &:focus {
      border: 2px solid ${(props) => props.color};
      ~ svg {
        fill: ${(props) => props.color};
      }
    }
  }
`;
