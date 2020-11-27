import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { resetApp } from "../store/actions/homeActions";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: "10px",
  },
  resetButton: {
    // textAlign: "center",
    marginTop: "10px",
  },
}));

const Reset = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Button onClick={() => props.resetApp()} className={classes.resetButton} variant='contained' color='secondary' fullWidth>
        reset
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetApp: () => dispatch(resetApp()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
