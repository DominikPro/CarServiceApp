import React from "react";
import styled from "styled-components";
import { theme } from "utils/theme";

const StatusControlwaitingForDiagnosis = styled.div`
  background-color: ${({ colors }) => theme.colors.waitingForDiagnosis};
  display: flex;
  margin: 5px;
  border-radius: 30px;
  height: 40px;
  min-width: 250px;
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
        <h5>Czeka na diagnostyke </h5>
      </StatusControlwaitingForDiagnosis>
    );
  } else if (props === "verification") {
    return (
      <StatusControlVerification>
        <h5>Diagnoza samochochodu</h5>
      </StatusControlVerification>
    );
  } else if (props === "acceptance") {
    return (
      <StatusControlAcceptance>
        <h5>Naprawa zakceptowana</h5>
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
        <h5>Gotowy do odbioru</h5>
      </StatusControlReadyForPicup>
    );
  } else if (props === "pickedUp") {
    return (
      <CustomerpickedUp>
        <h5>Samochód odebrany</h5>
      </CustomerpickedUp>
    );
  } else if (props === "customerResignation") {
    return (
      <CustomerResignation>
        <h5>Klient zrezygnował</h5>
      </CustomerResignation>
    );
  }
};

export default CarStatusControl;
