import React from "react";
import { Grid, CardContent, Card } from "@material-ui/core";
import { format } from "date-fns";
const stringDate = (dateString) => {
  if (!dateString) return "-";

  return format(new Date(dateString), "d MMMM yyyy ");
};

const isWaitingApprove = (status) => {
  return status === "Waiting Approve Consultation Live";
};

const ItemKonsultasi = ({
  subject,
  createdAt,
  description,
  liveConsul,
  Replies,
  status,
}) => {
  return (
    <Card variant="outlined" style={{ marginBottom: "20px" }}>
      <CardContent style={styles.container}>
        <div>
          <Grid container justify="space-around">
            <Grid item xs={12} sm={4} md={2}>
              <div style={styles.avatarUser} />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <h1 style={styles.title}>{subject}</h1>
              <p>{stringDate(createdAt)}</p>
              <p>{description}</p>
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <b>{stringDate(liveConsul)}</b>
            </Grid>
          </Grid>
          <hr />
          {isWaitingApprove(status) ? (
            <div>
              <h3>{status}</h3>
            </div>
          ) : (
            Replies.map((item, index) => (
              <Grid container key={index} style={styles.reply} spacing={4}>
                <Grid item xs={12} sm={4} md={2}>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <div style={styles.avatarReply} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <p style={styles.title}>{item.response}</p>
                  <p>{stringDate(item.createdAt)}</p>
                  <p>{item.fullName}</p>
                </Grid>
              </Grid>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const styles = {
  container: {
    marginTop: "20px",
  },
  avatarUser: {
    backgroundColor: "grey",
    border: "4px solid pink",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    margin: "0 auto",
  },
  avatarReply: {
    backgroundColor: "grey",
    border: "4px solid pink",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  title: {
    margin: 0,
  },

  reply: {
    marginTop: "20px",
  },
};

export default ItemKonsultasi;
