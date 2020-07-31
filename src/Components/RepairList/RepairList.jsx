import React from "react";
import { theme } from "utils/theme";
import styled from "styled-components";
import H3 from "Components/H3/H3";
import CheckIndexVisit from "Components/FunctionalCompononents/CheckIndexVisit/CheckIndexVisit";

const RepairListWrapper = styled.div`
  flex-grow: 3;
  display: flex;
  flex-basis: 300px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;
`;

const RepairList = (props) => {
  const { indexOfVisit, visits } = props;
  return (
    <RepairListWrapper>
      <H3>Lista napraw</H3>
      {CheckIndexVisit(indexOfVisit, visits, "repairs")}
    </RepairListWrapper>
  );
};

export default RepairList;
