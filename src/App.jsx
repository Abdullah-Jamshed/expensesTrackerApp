import { useEffect } from "react";
import { connect } from "react-redux";
// import Parent from "./components/Parent";
// import contextCounter from "./components/contextCounter";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Records from "./components/Records";
import History from "./components/History";
import Transaction from "./components/Transaction";
import Reset from "./components/Reset";
import { Container } from "@material-ui/core";
import "./style/App.css";

import { fetchCurrentBalance, fetchTotalIncome, fetchTotalExpense, fetchHistory } from "./store/actions/homeActions";

const App = (props) => {
  useEffect(() => {
    props.fetchCurrentBalance();
    props.fetchTotalIncome();
    props.fetchTotalExpense();
    props.fetchHistory();
  }, []);

  return (
    <Container className='App' maxWidth='sm'>
      <Container className='Card'>
        <Header />
        <Balance />
        <Records />
        <History />
        <Transaction />
        <Reset />
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentBalance: () => dispatch(fetchCurrentBalance()),
    fetchTotalIncome: () => dispatch(fetchTotalIncome()),
    fetchTotalExpense: () => dispatch(fetchTotalExpense()),
    fetchHistory: () => dispatch(fetchHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
