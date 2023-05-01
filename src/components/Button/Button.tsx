import React from "react";
import styled from "styled-components";

// Interface
interface IButton {
  content: String;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ content, type = "button", onClick }: IButton) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 14px;
  position: relative;

  color: #fff;
  font-weight: 600;

  border: none;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: 400ms;

  animation: buttonAnimate 10s infinite 2s;

  &:hover,
  &:active {
    outline: none;
    color: #141e30;
    background-color: #fff;
  }

  /* &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 60px;
    height: 6.5px;
    background: #141e30;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 60px;
    height: 6.5px;
    background: #141e30;
  } */

  /* ANIMATIONS */
  @keyframes buttonAnimate {
    0% {
      transform: translateX(0px);
    }

    80% {
      transform: translateX(0px);
    }

    90% {
      transform: translateX(-60px);
    }

    97% {
      transform: translateX(-60px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;
