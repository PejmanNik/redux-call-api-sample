import { createStyles } from "@material-ui/styles";

export default () =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    buttons: {
      width: 300,
      display: "flex",
      justifyContent: "space-between"
    },
    button: {
      width: 300,
      display: "flex",
      justifyContent: "center"
    }
  });
