import React, { useState, useEffect, useReducer } from "react";

import Button from "Components/Button/Button";
import H3 from "Components/H3/H3";
import CarItem from "Components-new/car-item/CarItem";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import changeStatusPickedUpReducer from "Reducers/changeStatusPickedUpReducer";

// import filterCarInService from "/Controllers/carsList/filterCarInService";
import filterCarInService from "../../Controllers/carsList/filterCarInService";
import axios from "axios";

//TODO: Problem z linkiem do drugiego routes przy dwóch importach przestają działać oba.
import "../../mock-api/routes/users";
// import "../../mock-api/routes/customerData";

const CarsList = (props) => {
  const [carAndcustomerList, setcarAndcustomerList] = useState([]);
  const [serchedCarAndCustomer, setSerchedCarAndCustomer] = useState(0);
  const [mainCarlist, setMainCarList] = useState(props.carList);
  const [carsDataApi, setcarsDataApi] = useState([]);
  const [carsDataApiReducer, setcarsDataApiReducer] = useState([]);
  const [customerDataApi, setCustomerDataApi] = useState([]);

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
  };

  const fetchCarsData = async () => {
    let carsData = await axios.get("/api/cars-data");
    console.log(carsData.data);
    setcarsDataApi(carsData.data);
  };

  const fetchCustomerData = async () => {
    let customerData = await axios.get("/api/customers-data");
    console.log(customerData.data);
    setCustomerDataApi(customerData.data);
  };

  useEffect(() => {
    fetchCarsData();
    fetchCustomerData();
  }, []);
  let carInservice = carsDataApi.filter(filterCarInService);

  console.log(carInservice);

  //TODO: Problem z asynchronicznością rozwiązanie - useffect które aktualizuje state dla reducera po wczytaniu carsDataApi.
  //TODO: Sprawdzić poprawność tego rozwiązania.

  useEffect(() => {
    setcarsDataApiReducer(carsDataApi);
    console.log(carsDataApi);
  }, [carsDataApi]);

  const [clientListInService, changeCarStatus] = useReducer(
    changeStatusPickedUpReducer,
    carsDataApiReducer
  );

  console.log(clientListInService);
  console.log(carsDataApiReducer); //nie przekazuje stanu do reducera changeStatusPickedUpReducer

  return (
    <Container className="justify-content-center ">
      <h3>{clientListInService}</h3>
      <Row>
        <Col className="justify-content-center my-1" xs={12} lg={12}>
          <H3 className="text-center ">Lista samochodów w serwisie</H3>
        </Col>
      </Row>
      <Row className="aligne-self-center">
        <InputGroup
          className="justify-content-center my-2"
          onChange={findCarOrCustomer}
        >
          <Col xs={12} lg={4}>
            <FormControl placeholder="Numer Vin" aria-label="Numer Vin" />
          </Col>

          <Col className="align-self-center" xs={8} lg={4}>
            <InputGroup.Append>
              <Button variant="outline-secondary" id={1}>
                {/* <Button variant="outline-secondary" id={1}> */}
                SZUKAJ / DODAJ SAMOCHÓD
              </Button>
            </InputGroup.Append>
          </Col>
        </InputGroup>
      </Row>
      <Row>
        <CarItem
          // carList={mainCarlist}
          changeCarStatus={changeCarStatus}
          carList={carInservice}
          setSelectedCarFromList={props.setSelectedCarFromList}
        />
      </Row>
    </Container>
  );
};

export default CarsList;
