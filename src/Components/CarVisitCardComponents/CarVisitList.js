import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
const ButtonStyle = styled(Button)`
  width: 90%;
`;

const CarVisitList = (props) => {
  const { carList, selectedCustomerToEdit } = props;
  const [selectedCarIdInArrey, setSelectedCarIdInArrey] = useState(0);
  let carVisitsInservice = 1;
  const [carFiltredFromList, setCarFiltredFromList] = useState(false);
  const [showVisitList, setShowVisitList] = useState(false);
  let datVisits = [];

  useEffect(() => {
    console.log(carList[0][1][0]);
    console.log(carList[0][1].length);
    console.log(carList[0][1][0].id);
    console.log(carList[0][1]);
    console.log(carList[0]);

    for (
      let custoemrIdInArrey = 0;
      carList.length > custoemrIdInArrey;
      custoemrIdInArrey++
    ) {
      if (
        carList[custoemrIdInArrey][0].carVinNumber === selectedCustomerToEdit
      ) {
        setSelectedCarIdInArrey(custoemrIdInArrey);
        setCarFiltredFromList(!carFiltredFromList);
        console.log(custoemrIdInArrey);
        break;
      }
    }
  }, [selectedCustomerToEdit]);

  const displayVisitList = (selectedCarIdInArrey) => {
    if (carFiltredFromList === true) {
      return <h3>siema to twoja wizyta nr: {selectedCarIdInArrey + 1}</h3>;
    }
  };

  const displaVisitData = (visit) => {
    console.log([visit.id]);
    let visitData = new Date(visit.id).toLocaleDateString();
    console.log([visitData]);
    datVisits.push(
      <div value={visit.id} key={visit.id}>
        {visitData}
      </div>
    );
  };

  function show() {
    carList[selectedCarIdInArrey][1].forEach(displaVisitData);
  }
  const pokaz = () => {
    const visittlist = datVisits.map((visst) => {
      return visst;
    });
    console.log("pokazło");
  };
  const zmien = () => {
    setShowVisitList(!showVisitList);
  };

  return (
    <>
      {showVisitList ? pokaz() : null}
      <h1>Lista wizyt</h1>
      {displayVisitList(selectedCarIdInArrey)}
      <button onClick={show}>Pokaż wizyty w serwisie</button>
      <button onClick={pokaz}>Pokaż </button>
      <button onClick={zmien}>zmien</button>

      {/* <button onClick={showdata}>Pokaż tablice </button> */}
      {/* {findCustomer()} */}
      {/* <ButtonStyle>Wizyta - 02/10/2019</ButtonStyle>
      <ButtonStyle>Wizyta - 17/09/2019</ButtonStyle>
      <ButtonStyle>Wizyta - 22/05/2019</ButtonStyle> */}
    </>
  );
};

export default CarVisitList;

// for (let visit = 0; carList[0][1].length > visit; visit++) {
//   let visitData = new Date(
//     carList[selectedCarIdInArrey][carVisitsInservice][visit].id
//   );
//   let localVisitDate = visitData.toLocaleDateString();
//   console.log(visit);
//   return <ButtonStyle>Wizyta - {localVisitDate}</ButtonStyle>;
// }
// displayVisitList();
