import * as React from "react";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/styles";

interface Props extends WithStyles<typeof styles> {
  children: React.ReactElement<any, any>[];
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

class Button extends React.PureComponent<Props> {
  public render() {
    const { children, classes, onClick } = this.props;

    return (
      <button className={classes.root} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default withStyles(styles)(Button);
