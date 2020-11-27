import firebase from "../../config/firebase";

const fetchCurrentBalance = () => {
  return async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child("/currentBalance")
      .on("value", (data) => {
        dispatch({ type: "CURRENT_BALANCE", payload: { value: data.val() } });
      });
  };
};
const fetchTotalIncome = () => {
  return async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child("/totalIncome")
      .on("value", (data) => {
        const res = data.val();
        res !== null
          ? dispatch({ type: "FETCH_DEPOSITE", payload: { value: res.value } })
          : dispatch({ type: "FETCH_DEPOSITE", payload: { value: "0.00" } });
      });
  };
};
const fetchTotalExpense = () => {
  return async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child("/totalExpense")
      .on("value", (data) => {
        const res = data.val();
        res !== null
          ? dispatch({ type: "FETCH_PAYMENT", payload: { value: data.val().value } })
          : dispatch({ type: "FETCH_PAYMENT", payload: { value: "0.00" } });
      });
  };
};

const transactionTypeAction = (value) => {
  return (dispatch) => {
    dispatch({ type: "TRANSACTION_TYPE", payload: { value } });
  };
};

const transactionDiscriptionAction = (discription) => {
  return (dispatch) => {
    dispatch({ type: "TRANSACTION_DISCRIPTION", payload: { discription } });
  };
};

const transactionAmountAction = (amount) => {
  return (dispatch) => {
    dispatch({ type: "TRANSACTION_AMOUNT", payload: { amount } });
  };
};

const transactionDeposite = ({ newBalance, totalIncome }) => {
  return () => {
    firebase.database().ref("/").child("/currentBalance").set(newBalance);
    firebase.database().ref("/").child("/totalIncome/value").set(totalIncome);
  };
};
const transactionPayment = ({ newBalance, totalExpense }) => {
  return () => {
    firebase.database().ref("/").child("/currentBalance").set(newBalance);
    firebase.database().ref("/").child("/totalExpense/value").set(totalExpense);
  };
};

const transactionButton = (flag) => {
  return (dispatch) => {
    dispatch({ type: "TRANSACTION_BUTTON", payload: { flag } });
  };
};

const fetchHistory = () => {
  return async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child("history")
      .on("value", (data) => {
        const transactionHistory = data.val();
        transactionHistory !== null
          ? dispatch({ type: "FETCH_HISTORY", payload: { transactionHistory } })
          : dispatch({ type: "FETCH_HISTORY", payload: { transactionHistory: [] } });
      });
  };
};

const addTransactionHistory = (transaction) => {
  var historyKey = firebase.database().ref().child("history").push().key;
  const transactionObj = { ...transaction, id: historyKey };
  return async () => {
    firebase.database().ref("/").child(`history/${historyKey}`).set(transactionObj);
  };
};
const deleteTransactionHistory = (id) => {
  return async () => {
    firebase.database().ref("/").child(`/history/${id}`).remove();
  };
};
const resetApp = () => {
  return async () => {
    firebase.database().ref("/").remove();
  };
};

export {
  transactionTypeAction,
  transactionDiscriptionAction,
  transactionAmountAction,
  transactionDeposite,
  transactionPayment,
  fetchCurrentBalance,
  fetchTotalIncome,
  fetchTotalExpense,
  transactionButton,
  addTransactionHistory,
  fetchHistory,
  deleteTransactionHistory,
  resetApp,
};
