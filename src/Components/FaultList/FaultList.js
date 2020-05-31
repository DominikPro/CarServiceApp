import React from "react";
import { theme } from "../../utils/theme";
import styled from "styled-components";
import H3 from "../H3/H3";
import CheckIndexVisit from "../FunctionalCompononents/CheckIndexVisit/CheckIndexVisit";

const FaultListWrapper = styled.div`
  flex-grow: 3;
  flex-basis: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;
`;

const FaultList = props => {
  const { indexOfVisit, visits } = props;
  return (
    <FaultListWrapper>
      <H3>Lista usterek</H3>
      {CheckIndexVisit(indexOfVisit, visits, "fault")}
    </FaultListWrapper>
  );
};
export default FaultList;
