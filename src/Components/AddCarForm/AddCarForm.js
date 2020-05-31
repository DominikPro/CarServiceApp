import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { theme } from "../../utils/theme";
// import Input from "../Input/Input";
import Styled from "styled-components";
import Button from "../Button/Button";
import H3 from "../H3/H3";
import H3Important from "../H3Important/H3Important";

const WrapperClientForm = Styled.div`
 width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  border-top: 2px solid black;
  padding-top:25px;
`;
const FormCustomerDetails = Styled.div`
max-width:300px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;
`;
const InputMargin = Styled.input`

flex-grow: 2;
  font-size: 13px;
  outline: none;
  border-radius: 10px;
  margin: 0px 5px;
  padding: 2px 5px;
  border-style: solid;
  border-color: ${({ colors }) => theme.colors.primary};
  margin:10px 15px;
  max-width:650px;

  :focus {
    border-color: ${({ colors }) => theme.colors.primaryDark};
  }
  
`;
const WrapperInfoFault = Styled.div`
display: flex;
flex-grow:1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: space-between;
`;

const AddCarForm = (props) => {
  const [clientAndCarData, setClientAndCarData] = useState({
    companyName: "",
    clientName: "",
    clientSurname: "",
    carRegistrationNumer: "",
    carVinNumber: "",
    numberOfKilometers: "",
    carBrand: "",
    carModel: "",
  });
  const [faultDescription, setFaultDescription] = useState();
  const [faultList, setFaultList] = useState([]);
  const [importantCheckBox, setImportantCheckBox] = useState(false);
  let carAndClientInfo = [];
  let carVisit = [
    {
      id: Date.now(),
      visitNumber: 1,
      status: "waitingForDiagnosis",
      faultList,
      pickupDay: "",
      pickupTime: "",
      mechanic: "",
    },
  ];

  function getCarAndClientData(e) {
    const value = e.target.value;
    setClientAndCarData({
      ...clientAndCarData,
      [e.target.name]: value.toUpperCase(),
    });
  }

  function getInputValueChange(e) {
    setFaultDescription(e.target.value.toUpperCase());
  }

  function addFaultToList(e) {
    e.preventDefault();
    if (faultDescription === "") return;
    setFaultList([
      ...faultList,
      { id: Date.now(), text: faultDescription, important: importantCheckBox },
    ]);
    setFaultDescription("");
    setImportantCheckBox(false);
  }

  function getImportant() {
    setImportantCheckBox(!importantCheckBox);
    console.log("działa");
    console.log(importantCheckBox);
  }
  function deletTheFaultDescription(id) {
    setFaultList(faultList.filter((fault) => fault.id !== id));
    console.log(faultList);
  }
  function sendToMainCarList() {
    carAndClientInfo.push(clientAndCarData, carVisit);
    props.addNewCarToMainCarList(carAndClientInfo);
    console.log(carAndClientInfo);
    carAndClientInfo = [];
    console.log(carAndClientInfo);
    setClientAndCarData({
      companyName: "",
      clientName: "",
      clientSurname: "",
      carRegistrationNumer: "",
      carVinNumber: "",
      numberOfKilometers: "",
      carBrand: "",
      carModel: "",
    });
    carVisit = [
      {
        id: Date.now(),
        visitNumber: 1,
        status: "waitingForDiagnosis",
        faultList,
        pickupDay: "",
        pickupTime: "",
        mechanic: "",
      },
    ];
    console.log(carVisit);
  }

  return (
    <>
      <H3>Przyjmim nowy samochód</H3>
      <WrapperClientForm>
        <FormCustomerDetails>
          <form>
            <InputMargin
              onChange={getCarAndClientData}
              name="companyName"
              placeholder="Wpisz Nazwę firmy"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="clientName"
              name="clientName"
              placeholder="Wpisz Imię"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="clientSurname"
              name="clientSurname"
              placeholder="Wpisz Nazwisko"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="clientPhoneNumber"
              name="clientPhoneNumber"
              placeholder="Wpisz telefon"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="carRegistrationNumer"
              name="carRegistrationNumer"
              placeholder="Wpisz numer rejstracyjny"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="carVinNumber"
              name="carVinNumber"
              placeholder="Wpisz numer VIN"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="carVinNumber"
              name="numberOfKilometers"
              placeholder="Wpisz Przebieg"
            />

            <InputMargin
              onChange={getCarAndClientData}
              // value="carBrand"
              name="carBrand"
              placeholder="Wpisz markę auta"
            />
            <InputMargin
              onChange={getCarAndClientData}
              // value="carModel"
              name="carModel"
              placeholder="Wpisz wpisz model"
            />
            {/* <Button onClick={#}>Przyjmij auto</Button> */}
          </form>
        </FormCustomerDetails>

        <WrapperInfoFault>
          <form>
            <InputMargin
              type="text"
              onChange={getInputValueChange}
              value={faultDescription}
              placeholder="Opis usterke"
            ></InputMargin>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="important"
                  onChange={getImportant}
                  checked={importantCheckBox}
                />
                Szczególnie ważne dla klienta
              </label>
            </div>
            <Button onClick={addFaultToList}>Dodaj Usterkę</Button>
            <ul>
              {faultList.map((fault) =>
                fault.important ? (
                  <H3Important key={fault.id}>
                    {fault.text}
                    <button
                      key={fault.id + 11}
                      onClick={() => deletTheFaultDescription(fault.id)}
                    >
                      Usuń
                    </button>
                  </H3Important>
                ) : (
                  <H3 key={fault.id}>
                    {fault.text}
                    <button
                      key={fault.id + 11}
                      onClick={() => deletTheFaultDescription(fault.id)}
                    >
                      Usuń
                    </button>
                  </H3>
                )
              )}
            </ul>
          </form>
        </WrapperInfoFault>
      </WrapperClientForm>

      {/* <Button onClick={props.addNewCarToMainCarList(clientAndCarData)}> */}
      <NavLink to="/CarsList">
        <Button onClick={sendToMainCarList}>Dodaj Samochód</Button>
      </NavLink>
    </>
  );
};
export default AddCarForm;
