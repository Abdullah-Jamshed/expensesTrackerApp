import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import "../style/HistoryItem.css";
// import firebase from "../config/firebase";
import { deleteTransactionHistory } from "../store/actions/homeActions";

const useStyles = makeStyles((theme) => ({
  divide: {
    marginBottom: "15px",
  },
}));

const deleteHistory = (id) => {
  console.log("===>", id);
};

const HistoryItem = ({ discription, value, type, id, deleteTransactionHistory }) => {
  const transactionType = type === "income" ? "incomeBorder" : "expenseBorder";
  const classes = useStyles();

  return (
    <div className={`HistoryItem ${transactionType}`}>
      <p className='discription'>{discription}</p>
      <p className='amount'>{value}</p>
      <Divider orientation='vertical' flexItem />
      <i className='fa fa-trash' aria-hidden='true' onClick={() => deleteTransactionHistory(id)}></i>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransactionHistory: (id) => dispatch(deleteTransactionHistory(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryItem);
