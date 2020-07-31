import React from "react";
import styled from "styled-components";
import Button from "Components/Button/Button";
import { theme } from "utils/theme";
import Label from "Components/Label/Label";
import Input from "Components/Input/Input";

const WrapperWorkerLogInPage = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 500px;
`;
const H1 = styled.h1`
  align-self: center;
  color: ${({ colors }) => theme.colors.primary};
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
`;
// const WrapperWorkerLogInForm = styled.form``;
const WorkerLogInForm = (props) => {
  return (
    <WrapperWorkerLogInPage>
      <H1>Panel Logowania Prcownika </H1>
      <Form>
        <Label>
          Login
          <Input type="text"></Input>
        </Label>
        <Label>
          Hasło
          <Input type="password"></Input>
        </Label>
        <Button type="button">Zaloguj</Button>
      </Form>
    </WrapperWorkerLogInPage>
  );
};

export default WorkerLogInForm;
