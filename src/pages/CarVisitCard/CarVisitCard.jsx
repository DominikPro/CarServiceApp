import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import NavLinks from "Components-new/shered/nav-bar/NavLinks";
import CarDataAndVists from "Components/CarVisitCardComponents/CarDataAndVists";
import CarVisitList from "Components/CarVisitCardComponents/CarVisitList";
import FaultAndRepaiManagment from "Components/CarVisitCardComponents/FaultAndRepaiManagment";

const WrapperEditCarVisit = styled.div`
  display: flex;
`;
const SideBarCarData = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 330px;
  background-color: yellow;
  justify-content: center;
`;

const CarVisitCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <WrapperEditCarVisit>
        <SideBarCarData>
          <CarDataAndVists
            carList={props.carList}
            selectedCustomerToEdit={props.selectedCustomerToEdit}
          />
          <CarVisitList
            carList={props.carList}
            selectedCustomerToEdit={props.selectedCustomerToEdit}
          ></CarVisitList>
        </SideBarCarData>
        <FaultAndRepaiManagment></FaultAndRepaiManagment>
      </WrapperEditCarVisit>
    </ThemeProvider>
  );
};

export default CarVisitCard;
