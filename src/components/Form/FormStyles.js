import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: `${theme.zIndex.drawer} !important`,
    padding: theme.spacing(20),
  },
  container: {
    backgroundColor: theme.palette.common.drawerBackground,
  },
  contentForm: {
    width: theme.typography.pxToRem(360),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: theme.typography.pxToRem(290),
    },
  },
  contentIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  titleDrawer: {
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "1px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main
  },
  subtitleDrawer: {
    fontSize: '16px',
    letterSpacing: '1px',
    marginBottom: theme.spacing(2),
    fontWeight: 600

  },
  contentButton: {
    marginTop: 30,
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    letterSpacing: '1px',
    color: theme.palette.common.white,
  },
  upDown: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& .MuiFilledInput-input': {
      color: `${theme.palette.common.black} !important`,
      borderRadius: '5px',
      '&:focus': {
        color: theme.palette.common.black
      }
    },
    '& .MuiFilledInput-adornedEnd': {
      backgroundColor: theme.palette.grey[200]
    },
    '& .MuiFilledInput-adornedStart': {
      backgroundColor: theme.palette.grey[200]
    }
  },
}));

export { useStyles };
