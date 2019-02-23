import { createStyles } from "@material-ui/styles";

export default () =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      flex: 1
    },
    header: {
      alignItems: "center",
      backgroundColor: "#181a1d",
      height: 115,
      textAlign: "center",
      padding: "0 20px"
    },
    page: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 55
    }
  });
