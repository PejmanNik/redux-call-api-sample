import * as React from "react";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/styles";
import moment from "moment";

interface Props extends WithStyles<typeof styles> {
  dateTime: string;
}

class Time extends React.PureComponent<Props> {
  public render() {
    const { dateTime, classes } = this.props;

    return (
      <div className={classes.root}>
        {!dateTime && "----/--/-- --:--:--"}
        {dateTime &&
          moment(dateTime)
            .utc()
            .local()
            .format("YYYY/MM/DD HH:mm:ss")}
      </div>
    );
  }
}

export default withStyles(styles)(Time);
