let initialState = {
  userFirstName: "priyanka",
  userLastName: "gupta"
};

export default function reducer(currentState = initialState, action) {
  // Logic applied to change the value

  console.log(action);
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return {
        ...currentState,
        userFirstName: action.payload
      };

    case "SET_USER_LAST_NAME":
      return {
        ...currentState,
        userLastName: action.payload
      };

    default:
      return currentState;
  }
}
