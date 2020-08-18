import React, { useState, useReducer } from "react";
import { theme } from "utils/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "Components/Button/Button";
import CarStatusControl from "Components-new/car-status/CarStatusControl";
// import H3 from "../../H3/H3";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InformationLabel = styled.p`
  font-weight: 700;
  color: ${({ colors }) => theme.colors.primaryDark};
`;

const CarItem = (props) => {
  const [clientCarVisitData, setClientCarVisitData] = useState();
  const { carList } = props;
  let clients = carList;
  let number = 0;
  let clientAndCarData = carList[0];
  console.log(carList);

  function showId(e) {
    props.setSelectedCarFromList(e.target.id);
  }
  //
  // const changeStatusPickedUpReducer = (state, action) => {
  //   switch (action.type) {
  //     case "changeCarStatusOnPickedUp":
  //       console.log("zadupca");
  //       console.log("zadupca");
  //       console.log(action.id);
  //   }
  // };

  // let initiaState = 1;

  // const [clientListInService, changeCarStatus] = useReducer(
  //   changeStatusPickedUpReducer,
  //   initiaState
  // );

  function DispplayList(clients) {
    if (clients.length > 0) {
      return (
        <Container>
          <Col>
            {clients.map((client) => (
              <Card className="my-3">
                <Row>
                  <Col xs={12} sm={6} lg={4}>
                    <Col xs={12}>
                      <Row>
                        <p className="mx-2">Marka: </p>
                        <InformationLabel>{client.carBrand}</InformationLabel>
                      </Row>
                      <Row>
                        <p className="mx-2">Model: </p>
                        <InformationLabel>{client.carModel}</InformationLabel>
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <Row>
                        <p className="mx-2">Nr Rejstracyjny: </p>
                        <InformationLabel>
                          {client.carRegistrationNumer}
                        </InformationLabel>
                      </Row>

                      <Row>
                        <p className="mx-2">Nr VIN: </p>
                        <InformationLabel>
                          {client.carVinNumber}
                        </InformationLabel>
                      </Row>
                    </Col>
                  </Col>
                  <Col xs={12} sm={6} lg={4}>
                    <Col xs={12} lg={12}>
                      <Row>
                        <p className="mx-2">Imię:</p>
                        <InformationLabel>{client.clientName}</InformationLabel>
                      </Row>
                    </Col>

                    <Col xs={12} lg={12}>
                      <Row>
                        <p className="mx-2">Nazwisko:</p>
                        <InformationLabel>
                          {client.clientSurname}
                        </InformationLabel>
                      </Row>
                    </Col>
                    <Col xs={12} lg={12}>
                      <Row>
                        <p className="mx-2">Tel:</p>
                        <InformationLabel>
                          {client.clientPhoneNumber}
                        </InformationLabel>
                      </Row>
                    </Col>
                  </Col>

                  <Col xs={12} lg={4}>
                    <Row>
                      <Col xs={4}>
                        <p>Data:</p>
                        <InformationLabel>[0][1][0]</InformationLabel>
                      </Col>
                      <Col xs={4}>
                        <p>Godzina:</p>
                        <InformationLabel>11:00</InformationLabel>
                      </Col>
                      <Col xs={4}>
                        <Row>
                          <p>Mechanik:</p>
                        </Row>
                        <Row>
                          <InformationLabel>Tomasz Webasto</InformationLabel>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Col>
                  <Row className="justify-content-center mb-2 ">
                    <Col xs={12} lg={6}>
                      {/* {CarStatusControl(
                        clients[number][1][0].status.toString(),
                        number++
                      )} */}
                    </Col>
                    <Col xs={4} lg={2} className="align-self-center">
                      <button
                        type="button"
                        class="btn btn-warning"
                        id={client.id}
                        onClick={() =>
                          props.changeCarStatus({
                            type: "changeCarStatusOnPickedUp",
                            id: client.id,
                            value: client.id,
                          })
                        }
                        przygotowane
                        pod
                        obsługe
                        reducer
                        z
                        carsList
                      >
                        Odebrany
                      </button>
                    </Col>
                    <Col xs={4} lg={2}>
                      <Link to="/CarVisitCard">
                        <button
                          className="align-self-center"
                          type="button"
                          class="btn btn-primary "
                          id={client.carVinNumber}
                          onClick={showId}
                        >
                          Edytuj
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Card>
            ))}
          </Col>
        </Container>
      );
    } else return null;
  }
  return <>{DispplayList(clients)}</>;
};
export default CarItem;
