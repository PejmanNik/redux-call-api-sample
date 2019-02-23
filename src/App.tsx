import React, { Component } from "react";
import { callAPI } from "./core/redux/actions/api";
import APIRequest, { RequestMethods } from "./core/apiClient/APIRequest";
import { connect } from "react-redux";
import { Dispatch, compose } from "redux";
import { withStyles, WithStyles } from "@material-ui/styles";
import styles from "./App.style";
import Tabs from "./components/Tabs";
import Tab from "./components/Tabs/Tab";
import PromisePage from "./pages/PromisePage";
import MapPage from "./pages/MapPage";

interface Props extends WithStyles<typeof styles> {
  callApi: (request: APIRequest) => void;
}

type State = { activePage: number };

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activePage: 0 };
  }

  handleChange = (activePage: number) => {
    this.setState({ activePage });
  };

  render() {
    const { classes } = this.props;
    const { activePage } = this.state;

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>API Client</h1>
          <Tabs onChange={this.handleChange} value={activePage}>
            <Tab title="With map" />
            <Tab title="With promise" />
          </Tabs>
        </header>
        <div className={classes.page}>
        {activePage == 0 && <MapPage />}
        {activePage == 1 && <PromisePage />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    callApi: (request: APIRequest) => {
      dispatch(callAPI(request));
    }
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(App);
