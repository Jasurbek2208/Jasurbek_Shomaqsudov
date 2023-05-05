import React from "react";
import styled from "styled-components";

// Interface
interface IInput {
  type: string;
  forID: string;
  isError: Boolean;
  placeholder: string;
  pattern?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeArea?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export default function Input({
  type,
  forID,
  isError,
  placeholder,
  pattern,
  onChange,
  onChangeArea,
}: IInput) {
  return type !== "textarea" ? (
    <StyledInput
      type={type}
      id={forID}
      className={"input" + (isError ? " error-border" : "")}
      placeholder={placeholder}
      pattern={pattern}
      onChange={onChange}
    />
  ) : (
    <StyledTextarea
      id={forID}
      className={"input" + (isError ? " error-border" : "")}
      placeholder={placeholder}
      onChange={onChangeArea}
    />
  );
}

const StyledInput = styled.input`
  padding: 15px 10px;
  margin-top: 4px;
  width: 100%;

  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.404);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 400ms ease-in-out;

  color: #fff;

  &::placeholder {
    color: #fff;
  }

  &.error-border {
    background: rgba(255, 0, 0, 0.404);
    box-shadow: 0 4px 30px rgba(255, 0, 0, 0.1);
  }
`;

const StyledTextarea = styled.textarea`
  padding: 15px 10px;
  margin-top: 4px;
  max-width: 100% !important;
  min-width: 100%;
  min-height: 60px;
  max-height: 145px;

  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.404);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 400ms background ease-in-out;

  color: #fff;

  &::placeholder {
    color: #fff;
  }

  &.error-border {
    background: rgba(255, 0, 0, 0.404);
    box-shadow: 0 4px 30px rgba(255, 0, 0, 0.1);
  }
`;
