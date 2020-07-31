import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "utils/theme";
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";
import H3 from "Components/H3/H3";
import CarItem from "Components/CarsListComponents/CarItem/CarItem";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const CarListWrapper = styled.div``;
const FindCar = styled.div``;

const CarsList = (props) => {
  const [ArrayNumberCount, setArrayNumberCount] = useState();
  const [carAndcustomerList, setcarAndcustomerList] = useState([]);
  const [serchedCarAndCustomer, setSerchedCarAndCustomer] = useState(0);
  const [mainCarlist, setMainCarList] = useState(props.carList);
  const [filteredCarList, setfilteredCarList] = useState();

  const findCarOrCustomerInList = () => {
    console.log(carAndcustomerList[1]);
    for (let i = 0; i < carAndcustomerList.length; i++) {
      if (
        carAndcustomerList[i][0].carVinNumber.search(serchedCarAndCustomer) > -1
      ) {
        setMainCarList([carAndcustomerList[i]]);
        return;
      } else {
        setMainCarList(props.carList);
      }
    }
  };

  const findCarOrCustomer = (e) => {
    setcarAndcustomerList(props.carList);
    console.log(carAndcustomerList);
    setSerchedCarAndCustomer(e.target.value.toUpperCase());

    if (serchedCarAndCustomer.length >= 4) {
      findCarOrCustomerInList();
    } else if (serchedCarAndCustomer.length < 4) {
      setMainCarList(props.carList);
    }
    console.log(serchedCarAndCustomer);
    console.log();
  };

  return (
    <Container fluid>
      <H3 md="auto">Lista samochodów w serwisie</H3>
      <Card>
        <InputGroup onChange={findCarOrCustomer} className="mb-3">
          <FormControl placeholder="Numer Vin" aria-label="Numer Vin" />
          <InputGroup.Append>
            <Button variant="outline-secondary">SZUKAJ / DODAJ SAMOCHÓD</Button>
          </InputGroup.Append>
        </InputGroup>
      </Card>

      <Container fluid>
        <CarItem
          carList={mainCarlist}
          setSelectedCarFromList={props.setSelectedCarFromList}
        />
      </Container>
    </Container>
  );
};

export default CarsList;
