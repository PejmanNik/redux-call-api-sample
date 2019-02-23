import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import styles from "./Tab.style";
import classNames from "classnames";

interface Props extends WithStyles<typeof styles> {
  title: string;
  isActive: boolean;
  setActivePage: () => void;
}

class Tab extends React.PureComponent<Props> {
  static defaultProps = {
    isActive: false,
    setActivePage: null
  };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { title, classes, isActive, setActivePage } = this.props;

    return (
      <div
        className={classNames(classes.root, isActive && classes.active)}
        onClick={setActivePage}
      >
        {title}
        {isActive && <div className={classes.activeLine} />}
      </div>
    );
  }
}

export default withStyles(styles)(Tab);
