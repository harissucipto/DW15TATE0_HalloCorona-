import React from "react";
import { format } from "date-fns";
import { Card, CardContent, Grid } from "@material-ui/core";
import { RadioButtonUnchecked, RadioButtonChecked } from "@material-ui/icons";
import UserConsultation from "./UserConsultation";
import FormReply from "./FormReply";

const stringDate = (dateString) => format(new Date(dateString), "d MMMM yyyy ");

const ItemReservasi = ({
  handleCloseReservasi,
  id,
  subject,
  description,
  createdAt,
  liveConsul,
  User,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div>
          <div style={styles.containerContent}>
            <Grid container spacing={5}>
              <Grid item sm={8}>
                <h2>{subject}</h2>
                <p>{description || "--"}</p>
              </Grid>
              <Grid item sm={4}>
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  style={styles.date}
                >
                  <Grid item xs={2} style={styles.unChecked}>
                    <RadioButtonUnchecked color="primary" />
                  </Grid>
                  <Grid item xs={10}>
                    <span style={styles.titleSub}>Date of complaint</span>
                    <br />
                    <span>{createdAt && stringDate(createdAt)}</span>
                  </Grid>
                  <Grid item xs={2} style={styles.unChecked}>
                    <RadioButtonChecked color="primary" />
                  </Grid>
                  <Grid item xs={10}>
                    <span style={styles.titleSub}>Live of consultation</span>
                    <br />
                    <span>{liveConsul && stringDate(liveConsul)}</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <UserConsultation user={User} />
          <FormReply handleCloseReservasi={handleCloseReservasi} id={id} />
        </div>
      </CardContent>
    </Card>
  );
};

const styles = {
  containerContent: {
    margin: "20px 10px 10px 10px",
    marginBottom: "40px",
  },
  titleSub: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  date: {
    marginTop: "10px",
  },
};

export default ItemReservasi;
