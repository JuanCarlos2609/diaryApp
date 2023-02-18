import { makeStyles } from "@material-ui/core/styles";
import { Images } from "../../assets";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.grey[200],
  },
  diaryContainer: {
    padding: theme.spacing(2),
    margin: `0 ${theme.spacing(5)}px`,
    [theme.breakpoints.down("xs")]: {
      margin: `0 ${theme.spacing(1)}px`,
    },
  },
  header: {
    height: "38vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 8rem center",
    backgroundAttachment: "fixed",
    overflowX: "hidden",
    overflow: "hidden",
    backgroundImage: `url(${Images.contact})`,
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "top 8rem center",

      [theme.breakpoints.down("xs")]: {
        backgroundSize: "50%",
        backgroundPosition: "top 12.5rem center",
      },
    },
  },
  contentButton: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginBottom: theme.spacing(2),
    },
  },
  button: {
    borderRadius: "5px",
    letterSpacing: "1px",
    padding: theme.spacing(1.2),
  },
  subtitle: {
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  contentCards: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export { useStyles };
