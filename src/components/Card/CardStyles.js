import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    padding: theme.spacing(2),
    flexDirection: "column",
    borderRadius: "10px",
  },
  contentAvatar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  sizeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textTransform: 'uppercase'
  },
  fields: {
    fontSize: "14px",
    fontWeight: 600,
    display: "flex",
    marginBottom: theme.spacing(1)
  },
  text: {
    fontSize: "14px",
  },
  iconEdit: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    background: theme.palette.primary.main,
  },
  button: {
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "color 0.1s ease-out",
    },
  },
}));

export { useStyles };
