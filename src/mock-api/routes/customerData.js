import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import coustomersData from "../data/customers-data";

const mock = new MockAdapter(axios, {
  delayResponse: 700,
});

mock
  .onGet("/api/customers-data")
  .reply(() => [200, coustomersData, { "Content-Typ": "application/js" }]);
