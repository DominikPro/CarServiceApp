import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import carsData from "../data/cars-data";

const mock = new MockAdapter(axios, {
  delayResponse: 700,
});

mock
  .onGet("/api/cars-data")
  .reply(() => [200, carsData, { "Content-Type": "application/js" }]);
