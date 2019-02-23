import { createStyles } from "@material-ui/styles";

export default () =>
  createStyles({
    root: {
      marginRight: 40,
      color: "#6a6a6a",
      cursor: "pointer",
      position: "relative",
      '&$active': {
        color: "#e6eaf2"
      }
    },
    activeLine: {
      backgroundColor: "#1cadf4",
      width: "100%",
      bottom: "-8px",
      height: "1px",
      position: "absolute"
    },
    active: {}
  });
