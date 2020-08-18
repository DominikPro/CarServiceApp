const changeStatusPickedUpReducer = (state, action) => {
  const findId = (element) => {
    if (element.id === action.id) {
      console.log(element);
      return element;
    }
  };

  switch (action.type) {
    case "changeCarStatusOnPickedUp":
      let clickedId = state.find(findId);
      console.log(state);
      return (state = clickedId);
  }
};

export default changeStatusPickedUpReducer;
