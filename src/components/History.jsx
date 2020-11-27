import React from "react";
import { connect } from "react-redux";
import { Divider, makeStyles } from "@material-ui/core";
import "../style/History.css";
import HistoryItem from "./HistoryItem";

const useStyles = makeStyles((theme) => ({
  divide: {
    height: "1.7px",
    marginBottom: "15px",
  },
}));

const History = ({ history }) => {
  const classes = useStyles();
  return (
    <div className='History'>
      <h3 className='heading'>History</h3>
      <Divider className={classes.divide} />
      {history.map((historyItem) => {
        return (
          <HistoryItem
            key={historyItem.id}
            id={historyItem.id}
            discription={historyItem.discription}
            value={historyItem.value}
            type={historyItem.type}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.homeReducer.history,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
