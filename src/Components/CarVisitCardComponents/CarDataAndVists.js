import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import Button from "../Button/Button";
import H3 from "../H3/H3";

const CarAndCustomerDataWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${({ colors }) => theme.colors.primaryLight};
  width: 320px;
  align-content: flex-start;
  justify-content: left;
  flex-wrap: wrap;
  padding-left: 5px;
`;
const P = styled.p`
  color: ${({ colors }) => theme.colors.primaryDark};
`;
const ClientData = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;
const H4 = styled.h4`
  padding-right: 3px;
  justify-items: left;
  color: ${({ colors }) => theme.colors.dark};
`;

const ButtonStyled = styled(Button)`
  width: 90%;
`;

const CarDataAndVists = (props) => {
  const { carList, selectedCustomerToEdit } = props;
  let selectedCarIdInArrey;
  let findCustomer = () => {
    for (
      let custoemrIdInArrey = 0;
      carList.length > custoemrIdInArrey;
      custoemrIdInArrey++
    ) {
      console.log(custoemrIdInArrey);
      if (
        carList[custoemrIdInArrey][0].carVinNumber === selectedCustomerToEdit
      ) {
        selectedCarIdInArrey = custoemrIdInArrey;
        return (
          <>
            <ClientData>
              <H4>Nazwa firmy:</H4>
              <H3>{carList[custoemrIdInArrey][0].companyName}</H3>
            </ClientData>
            <ClientData>
              <H4>Imię:</H4>
              <H3>{carList[custoemrIdInArrey][0].clientName}</H3>
            </ClientData>
            <ClientData>
              <H4>Nazwisko: </H4>
              <H3>{carList[custoemrIdInArrey][0].clientSurname}</H3>
            </ClientData>
            <ClientData>
              <H4>Numer Tel:</H4>
              <H3>{carList[custoemrIdInArrey][0].clientPhoneNumber}</H3>
            </ClientData>
            <ClientData>
              <H4>Numer rejstracyjny:</H4>
              <H3>{carList[custoemrIdInArrey][0].carRegistrationNumer}</H3>
            </ClientData>
            <ClientData>
              <H4>Numer VIN: </H4>
              <H3>{carList[custoemrIdInArrey][0].carVinNumber}</H3>
            </ClientData>
            <ClientData>
              <H4>Marka:</H4>
              <H3>{carList[custoemrIdInArrey][0].carBrand}</H3>
            </ClientData>
            <ClientData>
              <H4>Model:</H4>
              <H3>{carList[custoemrIdInArrey][0].carModel}</H3>
            </ClientData>
            <ButtonStyled>Edytuj Dane</ButtonStyled>
          </>
        );
      }
    }
  };

  return (
    <CarAndCustomerDataWrapper>{findCustomer()}</CarAndCustomerDataWrapper>
  );
};
export default CarDataAndVists;
