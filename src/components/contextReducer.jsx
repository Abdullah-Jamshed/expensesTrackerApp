
export default (state, action) => {
  switch (action) {
    case "INCREAMENT":
      return ++state;
    case "DECREAMENT":
      return --state;
    // default:
    //   state;
  }
};
