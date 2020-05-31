import React from "react";
// import { theme } from "../../utils/theme";
import styled from "styled-components";
import H3 from "../H3/H3";
import Button from "../Button/Button";

const ClientVisitListWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;
`;

const ClientVisitList = (props) => {
  const { visits, UserSelctedVisit } = props;
  const genertVisitList = () => {
    const visit = visits.map((visits) => (
      <Button
        onClick={displayVisitDetails}
        key={visits.id}
        value={visits.id}
        id={visits.id}
      >
        {visits.visit}
      </Button>
    ));
    return visit;
  };
  const displayVisitDetails = (e) => {
    UserSelctedVisit(e.target.id);
    console.log(e.target.id);
  };

  return (
    <ClientVisitListWrapper>
      <H3>Lista wizyt auta:</H3>
      <p>Marka: Ford</p>
      <p>Model: Focus</p>
      <p>Nr vin: 1cx1cs1f1g1s1sr12e</p>

      {genertVisitList()}
    </ClientVisitListWrapper>
  );
};

export default ClientVisitList;
