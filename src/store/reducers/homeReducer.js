const INITIAL_STATE = {
  currentBalance: { value: "0.00", type: "balance" },
  income: { value: "0.00", type: "income" },
  expense: { value: "0.00", type: "expense" },
  history: [
    // { discription: "Discription1", value: "66", type: "income" },
    // { discription: "Discription2", value: "55", type: "expense" },
  ],
  transactionType: null,
  transactionDiscription: "",
  transactionAmount: "",
  flag: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TRANSACTION":
      return {
        ...state,
        // currentBalance: {...state.currentBalance, value:action.payload.transaction},
        // income: {...state.currentBalance , value:action.payload.transaction}
      };
    case "CURRENT_BALANCE":
      return {
        ...state,
        currentBalance: { ...state.currentBalance, value: action.payload.value },
      };

    case "FETCH_DEPOSITE":
      return {
        ...state,
        income: { ...state.income, value: action.payload.value },
      };

    case "FETCH_PAYMENT":
      return {
        ...state,
        expense: { ...state.expense, value: action.payload.value },
      };
    case "FETCH_HISTORY":
      const historyObj = action.payload.transactionHistory;
      const historyObjKeyArray = Object.keys(historyObj);
      const historyArray = historyObjKeyArray.map((key) => historyObj[key]);
      // console.log(history)
      return {
        ...state,
        history: historyArray,
      };

    // case "ADD_TRANSACTION_HISTORY":
    //   return {
    //     ...state,
    //     history: [...state.history, action.payload.transaction],
    //   };

    case "TRANSACTION_TYPE":
      return {
        ...state,
        transactionType: action.payload.value,
      };
    case "TRANSACTION_DISCRIPTION":
      return {
        ...state,
        transactionDiscription: action.payload.discription,
      };
    case "TRANSACTION_AMOUNT":
      return {
        ...state,
        transactionAmount: action.payload.amount,
      };
    case "DEPOSITE":
      return {
        ...state,
        transactionAmount: action.payload.amount,
      };
    case "PAYMENT":
      return {
        ...state,
        transactionAmount: action.payload.amount,
      };
    case "TRANSACTION_BUTTON":
      return {
        ...state,
        flag: action.payload.flag,
      };
    default:
      return state;
  }
};
