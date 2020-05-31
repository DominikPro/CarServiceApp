import React from "react";
import ServiceLogo from "../../Components/ServiceLogo/ServiceLogo";
import Input from "../../Components/Input/Input";

import AddCarForm from "../../Components/AddCarForm/AddCarForm";

const AddCar = props => {
  return (
    <div>
      <AddCarForm addNewCarToMainCarList={props.addNewCarToMainCarList} />
    </div>
  );
};

export default AddCar;
