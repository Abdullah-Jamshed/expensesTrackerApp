import React from "react";
import "../style/Amount.css";

const Amount = ({ amount, type, heading }) => {
  return (
    <div className='Amount'>
      {/* <h5 className={props.type === `balance` ? `currentBalance` : props.type === `income` ? `income` : `expense`}>Current Balance</h5> */}
      <div className={type === `balance` ? `currentBalance` : type === `income` ? `income` : `expense`}>
        <h5>{heading}</h5>
        <p>$ {Number(amount).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Amount;
