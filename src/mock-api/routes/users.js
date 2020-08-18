import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import coustomersData from "../data/customers-data";
import carsData from "../data/cars-data";

const mock = new MockAdapter(axios, {
  delayResponse: 700,
});

mock
  .onGet("/api/cars-data")
  .reply(() => [200, carsData, { "Content-Type": "application/js" }]);

mock
  .onGet("/api/customers-data")
  .reply(() => [200, coustomersData, { "Content-Typ": "application/js" }]);
