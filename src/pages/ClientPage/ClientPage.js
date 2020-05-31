import React, { useState } from "react";
import { theme } from "../../utils/theme";
import styled from "styled-components";
import H1 from "../../Components/H1/H1";

import ClientVisitList from "../../Components/ClientVisitList/ClientVisitList";
import FaultList from "../../Components/FaultList/FaultList";
import RepairList from "../../Components/RepairList/RepairList";

const WrapperClientPage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch; */
`;

const ClientPage = props => {
  const [visits, setVists] = useState([
    {
      id: 1,
      visit: "wizyta 1",
      fault:
        "id:1 zasniedziałem przewody hamulcowe, słaby stan akumulatora, silnik do wymiany",
      repairs:
        "id:1    wymiana silnika, wymiana akumulatora, demontaż hamulców."
    },
    {
      id: 2,
      visit: "wizyta 2",
      fault:
        "id: 2 zasniedziałem przewody hamulcowe, słaby stan akumulatora, silnik do wymiany",
      repairs:
        "  id: 2 wymiana silnika, wymiana akumulatora, demontaż hamulców."
    },
    {
      id: 3,
      visit: "wizyta 3",
      fault:
        "id: 3 zasniedziałem przewody hamulcowe, słaby stan akumulatora, zasniedziałem przewody hamulcowe, silnik do wymiany",
      repairs: " id: 3 wymiana silnika, wymiana akumulatora, demontaż hamulców."
    }
  ]);
  const [selectedVisit, setSelectedVisit] = useState();

  const UserSelctedVisit = selectedVisit => {
    setSelectedVisit(parseInt(selectedVisit));
  };

  const index = visits.findIndex(visit => visit.id === selectedVisit);
  return (
    <>
      <H1>Welcom on client page</H1>
      <WrapperClientPage>
        <ClientVisitList visits={visits} UserSelctedVisit={UserSelctedVisit} />
        <FaultList visits={visits} indexOfVisit={index} />
        <RepairList visits={visits} indexOfVisit={index} />
      </WrapperClientPage>
    </>
  );
};

export default ClientPage;
