import React, { useState, useEffect } from "react";
import { TextField, Grid, MenuItem, Button } from "@material-ui/core";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import {
  checkIsUser,
  getUser,
  getInfoUserLogin,
  getAuth,
  userInfoReceived,
} from "../store/auth";
import { Redirect, useHistory } from "react-router-dom";
import { HOME, CONSULTATION } from "../constants/routes";
import {
  addConsultation,
  consultationAddReceived,
  getConsultations,
} from "../store/consultations";
import Loading from "./Loading";

const formatDate = (date) => format(date, "yyyy-MM-dd");

const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const FormReservasi = () => {
  const isUser = useSelector(checkIsUser);

  const { user } = useSelector(getAuth);
  const { loading, error } = useSelector(getConsultations);

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState(user?.fullName ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [bornDate, setBornDate] = useState(user?.fullName ?? "");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(user?.gender ?? "");
  const [subject, setSubject] = useState("");
  const [liveConsul, setLiveConsultationDate] = useState("");
  const [description, setDescription] = useState("");

  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const isEveryValueFil = (obj) =>
    Object.values(obj).every((item) => Boolean(item));
  const history = useHistory();

  const checkCanSubmit = () => {
    const newConsultation = {
      fullName,
      phone,
      bornDate,
      age,
      height,
      weight,
      gender,
      subject,
      liveConsul,
      description,
    };
    if (isEveryValueFil(newConsultation)) {
      return true;
    }
    return false;
  };
  const isCanSubmit = checkCanSubmit();

  const handleSubmit = async () => {
    const newConsultation = {
      fullName,
      phone,
      bornDate: formatDate(new Date(bornDate), "MM-dd-yyyy"),
      age,
      height,
      weight,
      gender,
      subject,
      liveConsul: formatDate(new Date(bornDate), "MM-dd-yyyy"),
      description,
    };

    const { type } = await dispatch(addConsultation(newConsultation));
    if (type === consultationAddReceived.type) {
      history.push(CONSULTATION);
    }
  };

  useEffect(() => {
    dispatch(getInfoUserLogin);
  }, []);

  if (loading) return <Loading />;
  if (!isUser) return <Redirect to={HOME} />;

  return (
    <div>
      <h3>{error}</h3>
      <form>
        <h2>Full Name </h2>
        <TextField
          variant="filled"
          fullWidth
          value={fullName}
          onChange={saveValue(setFullName)}
        />
        <h2>Phone</h2>
        <TextField
          variant="filled"
          fullWidth
          value={phone}
          onChange={saveValue(setPhone)}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <h2>Born Date</h2>
            <TextField
              variant="filled"
              fullWidth
              type="date"
              value={bornDate}
              onChange={saveValue(setBornDate)}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <h2>Age</h2>
            <TextField
              variant="filled"
              fullWidth
              value={age}
              onChange={saveValue(setAge)}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <h2>Height</h2>
            <TextField
              variant="filled"
              fullWidth
              value={height}
              onChange={saveValue(setHeight)}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <h2>Weight</h2>
            <TextField
              variant="filled"
              fullWidth
              value={weight}
              onChange={saveValue(setWeight)}
            />
          </Grid>
        </Grid>
        <h2>Gender</h2>
        <TextField
          variant="filled"
          fullWidth
          select
          value={gender}
          onChange={saveValue(setGender)}
        >
          {genders.map(({ label, value }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
        <h2>Subject</h2>
        <TextField
          variant="filled"
          fullWidth
          value={subject}
          onChange={saveValue(setSubject)}
        />
        <h2>Live Consultation Date</h2>
        <TextField
          variant="filled"
          fullWidth
          type="date"
          value={liveConsul}
          onChange={saveValue(setLiveConsultationDate)}
        />
        <h2>Description</h2>
        <TextField
          multiline
          rows="6"
          variant="filled"
          fullWidth
          value={description}
          onChange={saveValue(setDescription)}
        />

        <div sytle={styles.submit}>
          <Grid container justify="center">
            <Grid item>
              <Button
                onClick={handleSubmit}
                disabled={!isCanSubmit}
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

const styles = {
  submit: {
    marginTop: "20px",
    backgroundColor: "green",
  },
};

export default FormReservasi;
