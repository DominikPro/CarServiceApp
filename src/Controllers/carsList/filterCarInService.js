const filterCarInService = (carsDataApi) => {
  if (carsDataApi.inService === true) {
    return carsDataApi;
  }
};

export default filterCarInService;
