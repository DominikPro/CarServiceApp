let customereAndCar = [
  {
    CustomerData: {
      companyName: "",
      clientName: "Jan",
      clientSurname: "Kowalski",
      carRegistrationNumer: "Kr686jj",
      carVinNumber: "1111111111FSSFSTH",
      numberOfKilometers: 95245,
      carModel: "Focus",
      clientPhoneNumber: 500300400,
      carBrand: "1Ford",
    },

    CarVisitsData: {
      id: 1586008382505,
      visitNumber: 1,
      status: "customerResignation",
      faultList: [
        {
          id: 1586008357685,
          text: "Słabo hamuje ",
          important: true,
          numberOfKilometers: 95245,
        },
        {
          id: 1586008365226,
          text: "Przegląd ogólny ",
          important: false,
          numberOfKilometers: 99245,
        },
        {
          id: 1586008378218,
          text: "wymiana  kół ",
          important: false,
          numberOfKilometers: 124525,
        },
      ],
    },
  },
  {
    CustomerData: {
      companyName: "",
      clientName: "Anna",
      clientSurname: "Kwiatkowska",
      carRegistrationNumer: "KWI658",
      carVinNumber: "222222222gfdrets",
      numberOfKilometers: 243000,
      carMode: "MONDEO",
      clientPhoneNumber: 600700800,
      carBrand: "2Ford",
    },

    CarVisitsData: {
      id: 1586008382505,
      visitNumber: 1,
      status: "verification",
      faultLis: [
        {
          id: 1586008357685,
          text: "Słabo hamuje ",
          important: true,
          numberOfKilometers: 243000,
        },
        {
          id: 1586008365226,
          text: "Przegląd ogólny ",
          important: false,
          numberOfKilometers: 248000,
        },
        {
          id: 1586008378218,
          text: "wymiana  kół ",
          important: false,
          numberOfKilometers: 251000,
        },
      ],
    },
  },
  {
    CustomerData: {
      companyName: "",
      clientName: "Jan",
      clientSurname: "Kowalski",
      carRegistrationNumer: "Kr686jj",
      carVinNumber: "3333333333REDFGRS",
      numberOfKilometers: 187000,
      carModel: "Focus",
      clientPhoneNumber: 500300400,
      carBrand: "3Ford",
    },

    CarVisitsData: {
      id: 1586008382505,
      visitNumber: 1,
      status: "pickedUp",

      faultList: [
        {
          id: 1586008357685,
          text: "Słabo hamuje ",
          important: true,
          umberOfKilometers: 187000,
        },
        {
          id: 1586008365226,
          text: "Przegląd ogólny ",
          important: false,
          umberOfKilometers: 187500,
        },
        {
          id: 1586008378218,
          text: "wymiana  kół ",
          important: false,
          umberOfKilometers: 191000,
        },
      ],
    },
  },
];
export default customereAndCar;
