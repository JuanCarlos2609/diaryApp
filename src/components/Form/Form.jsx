/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStyles } from "./FormStyles";

const Form = ({ show, setShow, setContact, dataEdit = null }) => {
  const classes = useStyles();

  const toggleDrawer = (event) => {
    if (
      (event.type === "keydown" && event.key === "Escape") ||
      event.type === "click"
    )
      setShow();
  };

  const requiredFieldError = "Este campo es obligatorio.";
  const validEmail = "Introduzca un email válido";
  const onlyNumbers = "Escriba unicamente números";
  const positiveNumbers = "Escriba unicamente números positivos";
  const decimalNumbers = "Número no válido"

  const validationSchema = Yup.object({
    name: Yup.string().required(requiredFieldError),
    email: Yup.string().email(validEmail).required(requiredFieldError),
    tlf: Yup.number()
      .typeError(onlyNumbers)
      .positive(positiveNumbers)
      .integer(decimalNumbers)
      .required(requiredFieldError),
    birthdate: Yup.date().nullable().required(requiredFieldError),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tlf: "",
      birthdate: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (dataEdit === null) {
        setTimeout(() => {
          setContact(values);
          setShow();
          formik.resetForm();
        }, 500);
      } else alert("Se actualiza el contacto");
    },
  });

  useEffect(() => {
    if (dataEdit !== null) {
      formik.setValues({
        name: dataEdit.name,
        email: dataEdit.email,
        tlf: dataEdit.tlf,
        birthdate: dataEdit.birthdate,
      });
    } else formik.resetForm();
  }, [dataEdit]);

  return (
    <Drawer
      anchor={"right"}
      open={show}
      className={classes.root}
      onClose={toggleDrawer}
    >
      <Grid className={classes.contentForm}>
        <Grid className={classes.contentIcon}>
          <IconButton onClick={() => setShow()}>
            <Close />
          </IconButton>
        </Grid>
        <Typography className={classes.titleDrawer}>
          {dataEdit ? "EDITAR CONTACTO" : "AGREGA UN NUEVO CONTACTO"}
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              fullWidth
              id="name"
              type="text"
              label="Nombre"
              placeholder="Nombre"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="email"
              type="email"
              label="Correo electrónico"
              placeholder="mail@dominio.com"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.upDown}
              fullWidth
              id="tlf"
              type="number"
              label="Teléfono"
              placeholder="5511223344"
              variant="outlined"
              value={formik.values.tlf}
              onChange={formik.handleChange}
              error={formik.touched.tlf && Boolean(formik.errors.tlf)}
              helperText={formik.touched.tlf && formik.errors.tlf}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="birthdate"
              name="birthdate"
              type="date"
              variant="outlined"
              value={formik.values.birthdate}
              onChange={formik.handleChange}
              error={
                formik.touched.birthdate && Boolean(formik.errors.birthdate)
              }
              helperText={formik.touched.birthdate && formik.errors.birthdate}
            />
          </Grid>
        </Grid>
        <Grid className={classes.contentButton}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => formik.submitForm()}
            className={classes.button}
          >
            {dataEdit ? "Guardar" : "Crear"}
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

Form.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  setContact: PropTypes.func,
  dataEdit: PropTypes.object,
};

Form.defaultProps = {
  setShow: () => {},
  setContact: () => {},
  dataEdit: null,
};

export { Form };
