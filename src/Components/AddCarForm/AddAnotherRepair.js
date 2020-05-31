import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ChceckBoxImportant from "../AddCarForm/ChceckBoxImportant";
import H3 from "../H3/H3";
import H3Important from "../H3Important/H3Important";

const WrapperAddAnotherRepair = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  background-color: lightgray;
  padding: 20px;
  width: 1100px;
`;
const AddAnotherRepairMenu = styled.div`
  flex-wrap: wrap;
  width: 100%;
  max-height: 90px;
  margin-bottom: 40px;
`;
const FaultRepeirsListWrapper = styled.div`
  display: flex;
  background-color: pink;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightgray;
`;
const FaultList = styled.div`
  min-height: 400px;
  min-width: 400px;
  align-items: flex-start;
  justify-content: center;
`;
const ListOfrepairs = styled.div`
  min-height: 400px;
  min-width: 400px;
  align-items: flex-start;
  justify-content: center;
`;
const InputStyle = styled(Input)`
  max-width: 450px;
  min-height: 50px;
  font-size: 18px;
`;

const InputImportantWrapper = styled.div``;

const ListFaultRepair = styled.ul``;

const AddAnotherRepair = () => {
  const [display, setdisplay] = useState(true);
  //  -------- fault ----------
  const [faultDescription, setFaultDescription] = useState();
  const [faultList, setFaultList] = useState([]);
  const [importantCheckBoxFault, setImportantCheckBox] = useState(false);

  //  -------- repair ----------
  const [RepairDescription, setRepairDescription] = useState();
  const [repairList, setRepairList] = useState([]);
  const [importantCheckBoxRepair, setImportantCheckBoxRepair] = useState(false);

  function getInputValueChange(e) {
    e.preventDefault();
    if (e.target.name === "faultDescription") {
      setFaultDescription(e.target.value.toUpperCase());
    } else if (e.target.name === "RepairDescription") {
      setRepairDescription(e.target.value.toUpperCase());
    }
  }
  function addFaultOrRepairsToList(e) {
    e.preventDefault();

    if (e.target.name === "ButtonAddFault") {
      setFaultList([
        ...faultList,
        {
          id: Date.now(),
          text: faultDescription,
          important: importantCheckBoxFault,
        },
      ]);
      setFaultDescription("");
      setImportantCheckBox(false);
    } else if (e.target.name === "ButtonAddRepair") {
      setRepairList([
        ...repairList,
        {
          id: Date.now(),
          text: RepairDescription,
          important: importantCheckBoxRepair,
        },
      ]);
      setRepairDescription("");
      setImportantCheckBoxRepair(false);
    }
  }

  function getImportant(e) {
    if (e.target.name === "importantFaultList") {
      setImportantCheckBox(!importantCheckBoxFault);
    } else if (e.target.name === "importantRepairs") {
      setImportantCheckBoxRepair(!importantCheckBoxRepair);
    }
  }

  const deletTheFaultDescription = (id) => (e) => {
    if (e.target.name === "deletFaultButton") {
      setFaultList(faultList.filter((fault) => fault.id !== id));
    } else if (e.target.name === "deletRepairButton") {
      setRepairList(repairList.filter((repair) => repair.id !== id));
    }
  };

  return (
    <WrapperAddAnotherRepair>
      <AddAnotherRepairMenu>
        <Button onClick={() => setdisplay(!display)}>
          {display ? "Dodaj nową wizyte" : "Uktyj formularz"}
        </Button>
      </AddAnotherRepairMenu>
      {display ? null : (
        <FaultRepeirsListWrapper>
          <FaultList>
            <FormWrapper>
              <InputStyle
                type="text"
                onChange={getInputValueChange}
                value={faultDescription}
                name="faultDescription"
                placeholder="Opisz usterke"
              />
              <InputImportantWrapper>
                <label>
                  <input
                    type="checkbox"
                    name="importantFaultList"
                    onChange={getImportant}
                    checked={importantCheckBoxFault}
                  />
                  Szczególnie ważne dla klienta
                </label>
              </InputImportantWrapper>
              <Button name="ButtonAddFault" onClick={addFaultOrRepairsToList}>
                Dodaj usterkę
              </Button>
            </FormWrapper>
            <H3>Lista usterek</H3>
            <ListFaultRepair>
              {faultList.map((fault) =>
                fault.important ? (
                  <H3Important key={fault.id}>
                    {fault.text}
                    <button
                      name="deletFaultButton"
                      key={fault.id + 11}
                      onClick={deletTheFaultDescription(fault.id)}
                    >
                      Usuń
                    </button>
                  </H3Important>
                ) : (
                  <H3 key={fault.id}>
                    {fault.text}
                    <button
                      name="deletFaultButton"
                      key={fault.id + 11}
                      onClick={deletTheFaultDescription(fault.id)}
                    >
                      Usuń
                    </button>
                  </H3>
                )
              )}
            </ListFaultRepair>
          </FaultList>
          {/* ////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////// */}

          <ListOfrepairs>
            <FormWrapper>
              <InputStyle
                type="text"
                onChange={getInputValueChange}
                value={RepairDescription}
                name="RepairDescription"
                placeholder="Opisz Naprawę"
              />
              <InputImportantWrapper>
                <label>
                  <input
                    type="checkbox"
                    name="importantRepairs"
                    onChange={getImportant}
                    checked={importantCheckBoxRepair}
                  />
                  Szczególnie ważne dla klienta
                </label>
              </InputImportantWrapper>
              <Button name="ButtonAddRepair" onClick={addFaultOrRepairsToList}>
                Dodaj naprawę
              </Button>
            </FormWrapper>
            <H3>Lista Napraw</H3>
            <ListFaultRepair>
              {repairList.map((repair) =>
                repair.important ? (
                  <H3Important key={repair.id}>
                    {repair.text}
                    <button
                      name="deletRepairButton"
                      key={repair.id + 11}
                      onClick={deletTheFaultDescription(repair.id)}
                    >
                      Usuń
                    </button>
                  </H3Important>
                ) : (
                  <H3 key={repair.id}>
                    {repair.text}
                    <button
                      name="deletRepairButton"
                      key={repair.id + 11}
                      onClick={deletTheFaultDescription(repair.id)}
                    >
                      Usuń
                    </button>
                  </H3>
                )
              )}
            </ListFaultRepair>
          </ListOfrepairs>
        </FaultRepeirsListWrapper>
      )}
    </WrapperAddAnotherRepair>
  );
};

export default AddAnotherRepair;
