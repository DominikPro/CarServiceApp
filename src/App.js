import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavLinks from "Components-new/shered/nav-bar/NavLinks.jsx";
import WorkerLogInForm from "Components/WorkerLogInForm/WorkerLogInForm";
import ClientLoginForm from "Components/ClientLoginForm/ClientLoginForm";
import CarsLists from "containers/cars-lists/CarsList";
import ClientPage from "pages/ClientPage/ClientPage";
import Layout from "Layout/Layout";
import AddCar from "pages/AddCar/AddCar";
import CarVisitCard from "pages/CarVisitCard/CarVisitCard";

function App() {
  let info = "test";
  const [mainDataBase, setMainDataBase] = useState();
  const [selectedCustomerToEdit, setSelectedCustomerToEdit] = useState();

  {
    /* Status samochodó wyświeltany na liście aut
          -waitingForDiagnosis
          -verification
          -acceptance
          -repaired
          -readyForPicup
          -pickedUp
          -customerResignation
          */
  }

  let usersList = [
    //Dane klienta i samochod

    [
      {
        companyName: "",
        clientName: "Jan",
        clientSurname: "Kowalski",
        carRegistrationNumer: "Kr686jj",
        carVinNumber: "1111111111FSSFSTH",
        numberOfKilometers: "95245",
        carModel: "Focus",
        clientPhoneNumber: "500300400",
        carBrand: "1Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "customerResignation",
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "95245",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "99245",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "124525",
            },
          ],
        },
        {
          id: 1586008332505,
          visitNumber: 2,
          status: "customerResignation",
          faultList: [
            {
              id: 1586008354685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "95245",
            },
            {
              id: 1586008335226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "99245",
            },
            {
              id: 1586008378118,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "124525",
            },
          ],
        },
      ],
    ],
    [
      {
        companyName: "",
        clientName: "Anna",
        clientSurname: "Kwiatkowska",
        carRegistrationNumer: "KWI658",
        carVinNumber: "222222222GFDRTES",
        numberOfKilometers: "243000",
        carModel: "MONDEO",
        clientPhoneNumber: "600700800",
        carBrand: "2Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "verification",
          //lista usterek stwierdzona w trakcie tej wizyty
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "243000",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "248000",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "251000",
            },
          ],
          //lista wykonanych napraw będzie wykonywana w edycji samochodu
        },
      ],
    ],
    [
      {
        companyName: "",
        clientName: "Jan",
        clientSurname: "Kowalski",
        carRegistrationNumer: "Kr686jj",
        carVinNumber: "3333333333REDFGRS",
        numberOfKilometers: "187000",
        carModel: "Focus",
        clientPhoneNumber: "500300400",
        carBrand: "3Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "pickedUp",
          //lista usterek stwierdzona w trakcie tej wizyty
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              umberOfKilometers: "187000",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              umberOfKilometers: "187500",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              umberOfKilometers: "191000",
            },
          ],
          //lista wykonanych napraw będzie wykonywana w edycji samochodu
        },
      ],
    ],
  ];
  const [mainCarList, setMainCarList] = useState([
    //Dane klienta i samochod

    [
      {
        companyName: "",
        clientName: "Jan",
        clientSurname: "Kowalski",
        carRegistrationNumer: "Kr686jj",
        carVinNumber: "2222222111FSSFSTH",
        numberOfKilometers: "95245",
        carModel: "Focus",
        clientPhoneNumber: "500300400",
        carBrand: "1Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "customerResignation",
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "95245",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "99245",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "124525",
            },
          ],
        },
        {
          id: 1586008382405,
          visitNumber: 2,
          status: "customerResignation",
          faultList: [
            {
              id: 1586008344685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "95245",
            },
            {
              id: 1586008369926,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "99245",
            },
            {
              id: 1586008378818,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "124525",
            },
          ],
        },
        {
          id: 1586008321405,
          visitNumber: 3,
          status: "customerResignation",
          faultList: [
            {
              id: 1586008457685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "95245",
            },
            {
              id: 1586008349226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "99245",
            },
            {
              id: 1586004378218,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "124525",
            },
          ],
          //lista wykonanych napraw będzie wykonywana w edycji samochodu
        },
      ],
    ],
    [
      {
        companyName: "",
        clientName: "Anna",
        clientSurname: "Kwiatkowska",
        carRegistrationNumer: "KWI658",
        carVinNumber: "222222222GFDRTES",
        numberOfKilometers: "243000",
        carModel: "MONDEO",
        clientPhoneNumber: "600700800",
        carBrand: "2Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "verification",
          //lista usterek stwierdzona w trakcie tej wizyty
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              numberOfKilometers: "243000",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              numberOfKilometers: "248000",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              numberOfKilometers: "251000",
            },
          ],
          //lista wykonanych napraw będzie wykonywana w edycji samochodu
        },
      ],
    ],
    [
      {
        companyName: "",
        clientName: "Jan",
        clientSurname: "Kowalski",
        carRegistrationNumer: "Kr686jj",
        carVinNumber: "3333333333REDFGRS",
        numberOfKilometers: "187000",
        carModel: "Focus",
        clientPhoneNumber: "500300400",
        carBrand: "3Ford",
      },
      //lista wizyta w serwisie
      [
        {
          id: 1586008382505,
          visitNumber: 1,
          status: "pickedUp",
          //lista usterek stwierdzona w trakcie tej wizyty
          faultList: [
            {
              id: 1586008357685,
              text: "Słabo hamuje ",
              important: true,
              umberOfKilometers: "187000",
            },
            {
              id: 1586008365226,
              text: "Przegląd ogólny ",
              important: false,
              umberOfKilometers: "187500",
            },
            {
              id: 1586008378218,
              text: "wymiana  kół ",
              important: false,
              umberOfKilometers: "191000",
            },
          ],
          //lista wykonanych napraw będzie wykonywana w edycji samochodu
        },
      ],
    ],
  ]);

  const setSelectedCarFromList = (SelectedCar) => {
    setSelectedCustomerToEdit(SelectedCar);
    console.log(SelectedCar);
  };

  const takeAndAddNewCar = (Car) => {
    usersList.push(Car);
    setMainCarList(usersList);
    console.log(usersList);
    console.log(mainCarList);
  };

  return (
    <Layout>
      <Router>
        <NavLinks />
        <Switch>
          <Route path="/" exact>
            <ClientLoginForm />
          </Route>
          <Route path="/LoginPageWorker">
            <WorkerLogInForm />
          </Route>
          <Route path="/ClientPage">
            <ClientPage />
          </Route>
          <Route path="/AddCar">
            <AddCar addNewCarToMainCarList={takeAndAddNewCar} />
          </Route>
          <Route path="/CarsList">
            <CarsLists
              carList={mainCarList}
              setSelectedCarFromList={setSelectedCarFromList}
            />
          </Route>
          <Route path="/CarVisitCard">
            <CarVisitCard
              carList={mainCarList}
              selectedCustomerToEdit={selectedCustomerToEdit}
            />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
