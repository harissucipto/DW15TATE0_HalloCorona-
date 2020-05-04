import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Grid,
} from "@material-ui/core";

const UserConsultation = ({ status, users = [] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={styles.title}>No</TableCell>
            <TableCell style={styles.title}>Full Name</TableCell>
            <TableCell style={styles.title}>Gender</TableCell>
            <TableCell style={styles.title}>Phone</TableCell>
            <TableCell style={styles.title}>Age</TableCell>
            <TableCell style={styles.title}>Height</TableCell>
            <TableCell style={styles.title}>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell style={styles.content}>{index + 1}</TableCell>
              <TableCell style={styles.content}>{user?.fullName}</TableCell>
              <TableCell style={styles.content}>{user?.gender}</TableCell>
              <TableCell style={styles.content}>{user?.phone}</TableCell>
              <TableCell style={styles.title}>
                <Grid container>
                  <Grid item md={6} style={styles.betweenText}>
                    <div>Long time rent </div>
                    <div>:</div>
                  </Grid>
                  <Grid item md={6}>
                    {user.longTimeRent}
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const styles = {
  betweenText: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  container: {
    marginBottom: "10px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  content: {
    fontSize: "20px",
    color: "grey",
  },
};

export default UserConsultation;
