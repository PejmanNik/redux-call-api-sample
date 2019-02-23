import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { callAPI, removeAPIResponse } from "../core/redux/actions/api";
import APIRequest, { RequestMethods } from "../core/apiClient/APIRequest";
import Button from "../components/Button";
import APIResponse from "./../core/apiClient/APIResponse";
import Time from "../components/Time";
import styles from "./style";
import apiPromise from "../core/apiClient/apiPromise";

interface Props extends WithStyles<typeof styles> {
  callAPI: typeof callAPI;
  removeAPIResponse: typeof removeAPIResponse;
}

type State = {
  apiResponse: APIResponse | undefined;
};

class PromisePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { apiResponse: undefined };
  }

  onCall = async () => {
    // this is not a valid use case for use api call in promise
    // it is just for show you how you can use it
    
    const request = new APIRequest("time", RequestMethods.Get);
    request.options.storeResponse = false;
    const response = await apiPromise(request);
    this.setState({ apiResponse: response });
  };

  public render() {
    const { classes } = this.props;
    const { apiResponse } = this.state;
    const dateTime = apiResponse && apiResponse.response.dateTime;

    return (
      <div className={classes.root}>
        <Time dateTime={dateTime} />
        <div className={classes.button}>
          <Button onClick={this.onCall}>Call API</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PromisePage);
