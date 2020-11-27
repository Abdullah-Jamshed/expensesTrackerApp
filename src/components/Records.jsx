import React from "react";
import { connect } from "react-redux";
import Amount from "./Amount";
import { Divider, Container, makeStyles, Hidden } from "@material-ui/core";

import "../style/Records.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Records = ({ income, expense }) => {
  const classes = useStyles();
  return (
    <Container className='Records' maxWidth='sm'>
      <Amount heading='Income' type={income.type} amount={income.value} />
      <Hidden xsDown>
        <Divider orientation='vertical' flexItem />
      </Hidden>
      <Amount heading='Expense' type={expense.type} amount={expense.value} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    income: state.homeReducer.income,
    expense: state.homeReducer.expense,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);
