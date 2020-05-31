import React from "react";
import styled from "styled-components";
import { theme } from "../../../utils/theme";

const StatusControlwaitingForDiagnosis = styled.div`
  background-color: ${({ colors }) => theme.colors.waitingForDiagnosis};
  display: flex;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 30px;
  height: 40px;
  min-width: 270px;
  align-items: center;
  justify-content: center;
`;

const StatusControlVerification = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.StatusControlVerification};
  color: ${({ colors }) => theme.colors.dark};
`;

const StatusControlAcceptance = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.acceptance};
`;

const StatusControlRepaired = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.repaired};
`;
const StatusControlReadyForPicup = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.readyForPicup};
`;
const CustomerpickedUp = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.readyForPicup};
`;
const CustomerResignation = styled(StatusControlwaitingForDiagnosis)`
  background-color: ${({ colors }) => theme.colors.customerResignation};
`;

{
  /* Status samochodó wyświeltany na liście aut
        -waitingForDiagnosis
        -verification
        -acceptance
        -repaired
        -readyForPicup
        -pickedUp
        -customerResignation
        */
}
const CarStatusControl = (props) => {
  if (props === "waitingForDiagnosis") {
    return (
      <StatusControlwaitingForDiagnosis>
        <h3>Czeka na diagnostyke </h3>
      </StatusControlwaitingForDiagnosis>
    );
  } else if (props === "verification") {
    return (
      <StatusControlVerification>
        <h3>Diagnoza samochochodu</h3>
      </StatusControlVerification>
    );
  } else if (props === "acceptance") {
    return (
      <StatusControlAcceptance>
        <h3>Naprawa zakceptowana</h3>
      </StatusControlAcceptance>
    );
  } else if (props === "repaired") {
    return (
      <StatusControlRepaired>
        <h3>Naprawiany</h3>
      </StatusControlRepaired>
    );
  } else if (props === "readyForPicup") {
    return (
      <StatusControlReadyForPicup>
        <h3>Gotowy do odbioru</h3>
      </StatusControlReadyForPicup>
    );
  } else if (props === "pickedUp") {
    return (
      <CustomerpickedUp>
        <h3>Samochód odebrany</h3>
      </CustomerpickedUp>
    );
  } else if (props === "customerResignation") {
    return (
      <CustomerResignation>
        <h3>Klient zrezygnował</h3>
      </CustomerResignation>
    );
  }
};

export default CarStatusControl;
