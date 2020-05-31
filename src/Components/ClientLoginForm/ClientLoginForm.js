import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { theme } from "../../utils/theme";

import ClientPage from "../../pages/ClientPage/ClientPage";

const WrapperClientLoginForm = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 200px;
`;
const H1 = styled.h1`
  align-self: center;
  color: ${({ colors }) => theme.colors.primary};
`;

const Form = styled.form`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const ClientLoginForm = () => {
  const [inputValueCarVin, setInputValueCarVin] = useState("1234");
  const [defaultCarVin] = useState("1234");
  const [vinStatus, setVinStatus] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValueCarVin(value);
  };
  const handleCheckCarVin = () => {
    if (inputValueCarVin === defaultCarVin) {
      setVinStatus(true);
    } else {
      setVinStatus(false);
    }
  };

  function UserLoged() {
    if (vinStatus) {
      return <Redirect to="/ClientPage" />;
    } else if (vinStatus === false) {
      return <H1>Sprawdź czy wprowadziłeś poprawnie vin.</H1>;
    }
    return null;
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCheckCarVin();
    }
  };

  return (
    <WrapperClientLoginForm>
      <H1>Sprawdź szczegóły naprawy</H1>
      <Form>
        <Label>
          <Input
            type="text"
            placeholder="Podaj nr vin auta 1234"
            onChange={handleInputChange}
            value={inputValueCarVin}
            onKeyPress={onKeyPress}
          ></Input>
        </Label>
        <Button type="button" onClick={handleCheckCarVin}>
          Sprawdź
        </Button>
      </Form>
      {/* {vinStatus ? <ClientPage /> : null} */}
      <UserLoged />
    </WrapperClientLoginForm>
  );
};

export default ClientLoginForm;
