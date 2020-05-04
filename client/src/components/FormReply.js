import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Grid, Button } from "@material-ui/core";
import { replyConsultation } from "../store/consultations";

const FormReply = ({ handleCloseReservasi, id }) => {
  const [response, setResponse] = useState("");
  const handleChange = (evt) => setResponse(evt.target.value);

  const dispatch = useDispatch();
  const handleCancel = async () => {
    const result = await dispatch(
      replyConsultation(id, {
        response,
        consultation: {
          status: "Cancel",
        },
      })
    );

    console.log(result);
    handleCloseReservasi();
  };

  const handleApprove = async () => {
    const result = await dispatch(
      replyConsultation(id, {
        response,
        consultation: {
          status: "Waiting Live Consultation",
        },
      })
    );
    console.log(result);
    handleCloseReservasi();
  };

  return (
    <div style={styles.container}>
      <h3>Give Response</h3>
      <div>
        <TextField
          multiline
          rows="4"
          variant="filled"
          fullWidth
          value={response}
          onChange={handleChange}
        />
      </div>

      <Grid container justify="flex-end" spacing={4} style={styles.actions}>
        <Grid item>
          <Button
            disabled={!response.length}
            variant="contained"
            color="secondary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={!response.length}
            variant="contained"
            color="primary"
            onClick={handleApprove}
          >
            Approve
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
  container: {
    margin: "0 10px 10px 10px",
  },
  actions: {
    marginTop: "20px",
  },
};

export default FormReply;
