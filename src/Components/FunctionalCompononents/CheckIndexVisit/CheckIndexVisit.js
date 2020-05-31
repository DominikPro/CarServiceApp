import React from "react";
import H3 from "../../H3/H3";

const CheckIndexVisit = (indexOfVisit, visits, typeInformation) => {
  const info = typeInformation;
  if (visits < 1) {
    return <H3>Tego samochód nie był jeszcze w naszym serwisie.</H3>;
  } else if (indexOfVisit === undefined) {
    return null;
  } else if (indexOfVisit > -1 && typeInformation === "fault") {
    return <p>{visits[indexOfVisit].fault}</p>;
  } else if (indexOfVisit > -1 && typeInformation === "repairs") {
    return <p>{visits[indexOfVisit].repairs}</p>;
  }
};
export default CheckIndexVisit;
