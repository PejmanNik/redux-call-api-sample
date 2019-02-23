import { createStyles } from "@material-ui/styles";

export default () =>
  createStyles({
    root: {
      backgroundColor: "#163c7f",
      boxShadow:
        "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
      padding: "6px 16px",
      fontSize: "1rem",
      width: "120px",
      transition:
        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      lineHeight: "1.75",
      borderRadius: "4px",
      letterSpacing: "0.02857em",
      border: "0",
      margin: "0",
      fontWeight: "bold",
      cursor: "pointer",
      display: "inline-flex",
      outline: "none",
      position: "relative",
      justifyContent: "center",
      color: "#e0e0e0",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "#1f5cc5"
      },
      "&:active": {
        boxShadow:
          "-4px 6px 5px 0px rgba(0,0,0,0.2), -1px 3px 2px 0px rgba(0,0,0,0.14), -1px 5px 1px -2px rgba(0,0,0,0.12)"
      }
    }
  });
