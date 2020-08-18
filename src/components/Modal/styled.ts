import styled from "styled-components";
import { transparentize } from "polished";

import { IFullScreen, IClose } from "./index";

export const FullScreen = styled.div<IFullScreen>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  background-color: ${transparentize(0.3, "#011016")};

  animation: fadeModal 380ms ease-in-out 1;

  @keyframes fadeModal {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: ${transparentize(0.3, "#011016")};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #011026;
  border-radius: 8px;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  color: #abbabe;

  h2 {
    color: #abbabe;
    margin-bottom: 28px;
  }
`;

export const Close = styled.button<IClose>`
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 24px;
  color: ${transparentize(0.7, "#abbabe")};
  background: transparent;
  border: 0;
  font-size: 16px;

  &:hover {
    color: #abbabe;
  }
`;
