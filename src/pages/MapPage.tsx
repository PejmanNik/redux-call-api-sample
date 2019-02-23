import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, compose } from "redux";
import { withStyles, WithStyles } from "@material-ui/styles";
import { callAPI, removeAPIResponse } from "../core/redux/actions/api";
import APIRequest, { RequestMethods } from "../core/apiClient/APIRequest";
import { RootState } from "../core/redux/storeTypes";
import Button from "../components/Button";
import APIResponse from "./../core/apiClient/APIResponse";
import Time from "../components/Time";
import styles from "./style";

interface Props extends WithStyles<typeof styles> {
  callAPI: typeof callAPI;
  removeAPIResponse: typeof removeAPIResponse;
  apiResponse: APIResponse | undefined;
}

class MapPage extends React.PureComponent<Props> {
  onCall = () => {
    const request = new APIRequest("time", RequestMethods.Get);
    this.props.callAPI(request);
  };

  onClear = () => {
    this.props.removeAPIResponse("time");
  };

  public render() {
    const { apiResponse, classes } = this.props;
    const dateTime = apiResponse && apiResponse.response.dateTime;

    return (
      <div className={classes.root}>
        <Time dateTime={dateTime} />
        <div className={classes.buttons}>
          <Button onClick={this.onCall}>Call API</Button>
          <Button onClick={this.onClear}>Clean</Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  callAPI,
  removeAPIResponse
};

const mapStateToProps = (state: RootState) => {
  return {
    apiResponse: state.apiResponses["time"]
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(MapPage);
