const changeStatusPickedUpReducer = (state, action) => {
  const findId = (element) => {
    if (element.id === action.id) {
      console.log(element);
      return element;
    }
  };

  /* ma otrzymywać dane z api po kliknięciu w przycisk (w komp CarItem)
  "odebrane" ma zmienić status pojazdu i rerenderować listę aut w serwisie.*/

  switch (action.type) {
    case "changeCarStatusOnPickedUp":
      let clickedId = state.find(findId);
      console.log(state);
      return (state = clickedId);
  }
};

export default changeStatusPickedUpReducer;
