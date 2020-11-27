import React, { useEffect } from "react";
import { connect } from "react-redux";
import firebase from "../config/firebase";
import { Divider, Button, makeStyles } from "@material-ui/core";
import {
  transactionTypeAction,
  addTransactionHistory,
  transactionDeposite,
  transactionPayment,
  transactionDiscriptionAction,
  transactionAmountAction,
  fetchCurrentBalance,
  fetchTotalIncome,
  fetchTotalExpense,
} from "../store/actions/homeActions";

import TransactionField from "./TransactionField";

import "../style/Transaction.css";

const useStyles = makeStyles((theme) => ({
  divide: {
    height: "1.7px",
    marginBottom: "15px",
  },
  button: {
    margin: "5px",
  },
  buttonTop: {
    marginTop: "15px",
  },
}));

const Transaction = (props) => {
  const classes = useStyles();

  const buttonStatus = props.transactionDiscription !== "" && props.transactionAmount !== "";

  const transaction = () => {
    const { transactionType, transactionDiscription, transactionAmount } = props;
    if (transactionType === "expense") {
      if (Number(transactionAmount) <= Number(props.currentBalance.value)) {
        const newBalance = Number(props.currentBalance.value) - Number(transactionAmount);
        const totalExpense = Number(props.expense.value) + Number(transactionAmount);
        props.transactionPaymentSet({ newBalance, totalExpense });
        props.addTransactionHistory({ discription: transactionDiscription, value: transactionAmount, type: transactionType });
        props.transactionDiscriptionSet("");
        props.transactionAmountSet("");
      }
    } else {
      const newBalance = Number(props.currentBalance.value) + Number(transactionAmount);
      const totalIncome = Number(props.income.value) + Number(transactionAmount);
      firebase.database().ref("/").child("currentBalance").set(newBalance);
      props.transactionDepositeSet({ newBalance, totalIncome });
      props.addTransactionHistory({ discription: transactionDiscription, value: transactionAmount, type: transactionType });

      props.transactionDiscriptionSet("");
      props.transactionAmountSet("");
    }
  };

  return (
    <div className='Transaction'>
      <h3 className='heading'>Transaction</h3>
      <Divider className={classes.divide} />

      <div className='transactionSelection'>
        <Button
          className={classes.button}
          onClick={() => props.transactionTypeSet("income")}
          variant={props.transactionType === "income" ? "contained" : "outlined"}>
          <i className='fa fa-university' aria-hidden='true' />
          Deposite
        </Button>
        <Button
          className={classes.button}
          onClick={() => props.transactionTypeSet("expense")}
          variant={props.transactionType === "expense" ? "contained" : "outlined"}>
          <i className='fa fa-credit-card' />
          Payment
        </Button>

        <TransactionField transactionType={props.transactionType} />

        <Button
          onClick={transaction}
          className={classes.buttonTop}
          variant='contained'
          color='primary'
          disabled={
            props.transactionType !== "expense"
              ? !buttonStatus
              : (props.transactionAmount > props.currentBalance.value ? true : false) || !buttonStatus
          }
          fullWidth>
          Transaction
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentBalance: state.homeReducer.currentBalance,
    income: state.homeReducer.income,
    expense: state.homeReducer.expense,
    transactionType: state.homeReducer.transactionType,
    transactionDiscription: state.homeReducer.transactionDiscription,
    transactionAmount: state.homeReducer.transactionAmount,
    flag: state.homeReducer.flag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    transactionTypeSet: (type) => dispatch(transactionTypeAction(type)),
    addTransactionHistory: (transaction) => dispatch(addTransactionHistory(transaction)),
    transactionDepositeSet: (transaction) => dispatch(transactionDeposite(transaction)),
    transactionPaymentSet: (transaction) => dispatch(transactionPayment(transaction)),
    transactionDiscriptionSet: (discription) => dispatch(transactionDiscriptionAction(discription)),
    transactionAmountSet: (amount) => dispatch(transactionAmountAction(amount)),
    fetchCurrentBalance: () => dispatch(fetchCurrentBalance()),
    fetchTotalIncome: () => dispatch(fetchTotalIncome()),
    fetchTotalExpense: () => dispatch(fetchTotalExpense()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
