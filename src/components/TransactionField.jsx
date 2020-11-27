import React from "react";
import { connect } from "react-redux";
import { TextField, makeStyles } from "@material-ui/core";
import { transactionDiscriptionAction, transactionAmountAction, transactionButton } from "../store/actions/homeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  text: {
    marginTop: "20px",
  },
}));

const TransactionField = (props) => {
  const classes = useStyles();

  const amountHandler = (e) => {
    if (!isNaN(e.target.value)) {
      props.transactionAmountSet(e.target.value);
    }
  };

  return (
    <div className='TransactionField'>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          className={classes.text}
          id='outlined-basic1'
          label='Discription'
          variant='outlined'
          size='small'
          fullWidth
          inputProps={{ maxLength: 20 }}
          disabled={props.transactionType === null}
          value={props.transactionDiscription}
          onChange={(e) => props.transactionDiscriptionSet(e.target.value)}
        />
        <TextField
          className={classes.text}
          id='outlined-basic2'
          label='Amount'
          variant='outlined'
          size='small'
          fullWidth
          inputProps={{ maxLength: 12 }}
          disabled={props.transactionType === null}
          value={props.transactionAmount}
          onChange={amountHandler}
          helperText={props.transactionType === "expense" ? "Amount Should be less than current Balance" : ""}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.homeReducer.currentBalance,
    transactionType: state.homeReducer.transactionType,
    transactionDiscription: state.homeReducer.transactionDiscription,
    transactionAmount: state.homeReducer.transactionAmount,
    flag: state.homeReducer.flag,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    transactionDiscriptionSet: (discription) => dispatch(transactionDiscriptionAction(discription)),
    transactionAmountSet: (amount) => dispatch(transactionAmountAction(amount)),
    transactionButton: (flag) => dispatch(transactionButton(flag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionField);
