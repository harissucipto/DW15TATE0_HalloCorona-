import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  TableHead,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

import { checkIsLogin } from "../store/auth";
import { getConsultations, loadConsultations } from "../store/consultations";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";
import DetailReservasi from "./DetailReservasi";
import DetailKonsultasi from "./DetailKonsultasi";

const colorStatus = {
  "Waiting Live Consultation": "green",
  "Waiting Approve Consultation Live": "orange",
  Cancel: "red",
};

const statusConsultant = {
  "Waiting Live Consultation": "Waiting Live Consultation",
  "Waiting Approve Consultation Live": "Waiting Approve Consultation Live",
  Cancel: "Cancel",
};

const isReplied = (status) => {
  return status !== "Waiting Approve Consultation Live";
};

const ListReservasi = () => {
  const { list, loading, message } = useSelector(getConsultations);
  const dispatch = useDispatch();
  const isLogin = useSelector(checkIsLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(loadConsultations);
    }
  }, [dispatch, isLogin]);

  if (!isLogin) return <Redirect to={HOME} />;

  if (loading) return <Loading />;

  if (message) return <h3>{message}</h3>;

  return (
    <div>
      {!loading && !list.length ? (
        <div>
          <h1>Reservation</h1>
          <hr />
          <h3>Tidak ada data</h3>
        </div>
      ) : null}
      {!loading && list.length && (
        <>
          <h1>Reservation</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.title}>No</TableCell>
                  <TableCell style={styles.title}>Users</TableCell>
                  <TableCell style={styles.title}>Subject</TableCell>
                  <TableCell style={styles.title}>Date of Complaint</TableCell>
                  <TableCell style={styles.title}>Status</TableCell>
                  <TableCell style={styles.title}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell style={styles.content}>{index + 1}</TableCell>
                    <TableCell style={styles.content}>
                      {item?.User?.username}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {item?.subject ?? "-"}
                    </TableCell>
                    <TableCell style={styles.content}>
                      {item?.createdAt || "-"}
                    </TableCell>
                    <TableCell
                      style={{
                        ...styles.content,
                        color: colorStatus[item?.status] || "orange",
                      }}
                    >
                      {statusConsultant[item?.status] || "-"}
                    </TableCell>
                    <TableCell>
                      {isReplied(item.status) ? (
                        <DetailKonsultasi data={item} />
                      ) : (
                        <DetailReservasi data={item} id={item.id} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

const styles = {
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  content: {
    fontSize: "17px",
    color: "black",
  },
};

export default ListReservasi;
