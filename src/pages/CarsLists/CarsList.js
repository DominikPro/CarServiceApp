import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import H3 from "../../Components/H3/H3";
import CarItem from "../../Components/CarsListComponents/CarItem/CarItem";

const CarListWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: flex-start;
  width: 100vw;
  height: 100px;
`;
const FindCar = styled.div`
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const CarsList = (props) => {
  const [ArrayNumberCount, setArrayNumberCount] = useState();
  const [carAndcustomerList, setcarAndcustomerList] = useState([]);
  const [serchedCarAndCustomer, setSerchedCarAndCustomer] = useState(0);
  const [mainCarlist, setMainCarList] = useState(props.carList);
  const [filteredCarList, setfilteredCarList] = useState();

  // console.log(mainCarlist);

  const findCarOrCustomerInList = () => {
    console.log("----działa funkcja znajdź");
    console.log(carAndcustomerList[1]);
    for (let i = 0; i < carAndcustomerList.length; i++) {
      if (
        carAndcustomerList[i][0].carVinNumber.search(serchedCarAndCustomer) > -1
      ) {
        setMainCarList([carAndcustomerList[i]]);
        // console.log("=-=-=-=-=-=-=-=-=-=funkcja i petla dział");
        // console.log(`SZUKANY WYNIK NA POZYCJI W TABLICY-------------> ${i}`);
        return;
      } else {
        setMainCarList(props.carList);
        // console.log("nie znaleziono auta");
      }
    }
  };

  const findCarOrCustomer = (e) => {
    setcarAndcustomerList(props.carList);
    console.log(carAndcustomerList);
    setSerchedCarAndCustomer(e.target.value.toUpperCase());

    if (serchedCarAndCustomer.length >= 4) {
      // console.log("-----------------działa ifffffffff");
      findCarOrCustomerInList();
    } else if (serchedCarAndCustomer.length < 4) {
      setMainCarList(props.carList);
    }
    console.log(serchedCarAndCustomer);
    console.log();
  };

  return (
    <>
      <H3>Lista samochodów w serwisie</H3>
      <FindCar>
        <Input onChange={findCarOrCustomer} placeholder="Wpisz numer VIN" />
        <Button>SZUKAJ / DODAJ SAMOCHÓD</Button>
      </FindCar>

      <CarListWrapper>
        <CarItem
          carList={mainCarlist}
          // carList={props.carList}
          setSelectedCarFromList={props.setSelectedCarFromList}
        />
      </CarListWrapper>
    </>
  );
};

export default CarsList;
