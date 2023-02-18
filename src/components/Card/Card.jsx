import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Card as MaterialCard,
  Avatar,
  Grid,
  IconButton,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./CardStyles";
import { Delete, Edit } from "@material-ui/icons";
import { format } from "date-fns";

const Card = ({ data, handleUpdate }) => {
  const classes = useStyles();
  const firstLetter = data.name.slice(0, 1);

  const newFormatDate = format(
    new Date(`${data.birthdate} ${"12:00:00"}`),
    "dd/MM/yyyy"
  );

  return (
    <>
      <MaterialCard className={classes.rootCard}>
        <Grid className={classes.contentAvatar}>
          <Avatar className={classes.sizeAvatar}>{firstLetter}</Avatar>
        </Grid>
        <Typography className={classes.fields}>
          Nombre: &nbsp;
          <Typography className={classes.text}>{data.name}</Typography>
        </Typography>
        <Typography className={classes.fields}>
          Email: &nbsp;
          <Typography className={classes.text}>{data.email}</Typography>
        </Typography>
        <Typography className={classes.fields}>
          Telefono: &nbsp;
          <Typography className={classes.text}>{data.tlf}</Typography>
        </Typography>
        <Typography className={classes.fields}>
          Fecha de nacimiento: &nbsp;
          <Typography className={classes.text}>{newFormatDate}</Typography>
        </Typography>
        <Divider className={classes.divider} />
        <Grid container className={classes.iconEdit}>
          <Grid item>
            <IconButton
              className={classes.button}
              onClick={() => alert('Se elimina el contacto')}
            >
              <Delete />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.button}
              onClick={() => handleUpdate(data)}
            >
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
      </MaterialCard>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func,
};

Card.defaultProps = {
  data: {},
  handleUpdate: () => {},
};

export { Card };
