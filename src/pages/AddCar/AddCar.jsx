import React from "react";

import AddCarForm from "Components/AddCarForm/AddCarForm";

const AddCar = (props) => {
  return (
    <div>
      <AddCarForm addNewCarToMainCarList={props.addNewCarToMainCarList} />
    </div>
  );
};

export default AddCar;
