import React, { useEffect, useState } from "react";
import { useStyles } from "./DiaryStyles";
import { Button, Grid, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Form } from "../Form";
import { Card } from "../Card";

const Diary = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    if (show === false) setDataEdit(null);
  }, [show]);

  const handleUpdate = (data) => {
    setDataEdit(data);
    setShow(true);
  };

  return (
    <Grid className={classes.container}>
      <Grid className={classes.header}>
        <Typography
          style={{ fontSize: "60px", fontWeight: 600, textAlign: "center" }}
        >
          Agenda App
        </Typography>
      </Grid>
      <Grid className={classes.diaryContainer}>
        <Grid className={classes.contentButton}>
          <Button
            size="large"
            className={classes.button}
            color="primary"
            variant="contained"
            endIcon={<AddCircle />}
            onClick={() => setShow(true)}
          >
            Agregar
          </Button>
        </Grid>
        <Form
          show={show}
          setShow={() => setShow(!show)}
          setContact={(data) => setContact([...contact, data])}
          dataEdit={dataEdit}
          contact={contact}
        />

        <Typography
          style={{
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: 20,
            marginTop: 20,
          }}
          className={classes.subtitle}
        >
          Mi lista de contactos
        </Typography>

        <Typography style={{ fontSize: "14px" }}>
          Total de contactos guardados: {contact.length}
        </Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: 20 }}
          className={classes.contentCards}
        >
          {contact.map((person, index) => (
            <Grid item key={`Card-${person.name}-${index}`}>
              <Card data={person} handleUpdate={(data) => handleUpdate(data)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Diary };
