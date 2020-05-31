import React, { useState } from "react";
import { theme } from "../../../utils/theme";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Button/Button";
import CarStatusControl from "../CarStatusControl/CarStatusControl";
// import H3 from "../../H3/H3";

const WrapperCarItem = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: 50px;
  width: 100vw;
  height: 150px;
  padding: 0 80px;
  margin: 0 30px;
  margin-bottom: 15px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  flex-wrap: wrap;
  :hover {
    border: 1px solid black;
  }
`;
const ClientAndCarData = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const RepairInformation = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const InformationLabel = styled.p`
  font-weight: 700;
  color: ${({ colors }) => theme.colors.primaryDark};
`;
const ButtonItem = styled(Button)`
  width: 110px;
  height: 30px;
`;

const CarItem = (props) => {
  const [clientCarVisitData, setClientCarVisitData] = useState();
  const { carList } = props;
  let clients = carList;
  let number = 0;
  let clientAndCarData = carList[0][0];
  console.log(carList);

  console.log(clients);
  // console.log(clients[1][1][0].status.toString());

  function showId(e) {
    props.setSelectedCarFromList(e.target.id);
  }

  function DispplayList(clients) {
    if (clients.length > 0) {
      return (
        <div>
          {clients.map((client) => (
            <>
              <WrapperCarItem>
                <ClientAndCarData>
                  <p>Marka:</p>
                  <InformationLabel>{client[0].carBrand}</InformationLabel>
                  <p>Model:</p>
                  <InformationLabel>{client[0].carModel}</InformationLabel>
                  <p>Nr Rejstracyjny: </p>
                  <InformationLabel>
                    {client[0].carRegistrationNumer}
                  </InformationLabel>
                  <p>Nr VIN:</p>
                  <InformationLabel>{client[0].carVinNumber}</InformationLabel>
                  <p>Imię:</p>
                  <InformationLabel> {client[0].clientName}</InformationLabel>
                  <p>Nazwisko:</p>
                  <InformationLabel>{client[0].clientSurname}</InformationLabel>
                  <p>Tel:</p>
                  <InformationLabel>
                    {client[0].clientPhoneNumber}
                  </InformationLabel>
                </ClientAndCarData>
                <RepairInformation>
                  <ButtonItem>Odebrany</ButtonItem>
                  <p>Data:</p>
                  <InformationLabel>[0][1][0]</InformationLabel>
                  <p>Godzina:</p>
                  <InformationLabel>11:00</InformationLabel>
                  <p>Mechanik:</p>
                  <InformationLabel>Tomasz Webasto</InformationLabel>
                  {CarStatusControl(
                    clients[number][1][0].status.toString(),
                    number++
                  )}

                  <Link to="/CarVisitCard">
                    <ButtonItem id={client[0].carVinNumber} onClick={showId}>
                      Edytuj
                    </ButtonItem>
                  </Link>
                </RepairInformation>
              </WrapperCarItem>
            </>
          ))}
        </div>
      );
    } else return null;
  }
  return <>{DispplayList(clients)}</>;
};
export default CarItem;
