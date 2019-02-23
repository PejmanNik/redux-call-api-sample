import * as React from "react";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/styles";

interface Props extends WithStyles<typeof styles> {
  children: React.ReactElement<any, any>[];
  onChange: (activePage: number) => void;
  value: number;
}

class Tabs extends React.PureComponent<Props> {
  public setActivePage = (index: number) => () => {
    this.props.onChange(index);
  };

  public render() {
    const { children, classes, value } = this.props;

    let parsedChildren = children.map((item, i) => {
      return React.cloneElement(item, {
        key: i,
        isActive: i === value,
        setActivePage: this.setActivePage(i)
      });
    }, this);

    return <div className={classes.root}>{parsedChildren}</div>;
  }
}

export default withStyles(styles)(Tabs);
