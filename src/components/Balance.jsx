import React from "react";
import { connect } from "react-redux";
import Amount from "./Amount";
import "../style/Balance.css";

const Balance = ({ currentBalance }) => {
  return (
    <div className='Balance'>
      <Amount heading='Current Balance' type={currentBalance.type} amount={currentBalance.value} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentBalance: state.homeReducer.currentBalance,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
// export default Balance;
