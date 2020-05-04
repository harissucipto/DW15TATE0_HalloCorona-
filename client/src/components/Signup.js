import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogContent,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { HOME, RESERVATION } from "../constants/routes";
import { getSignupIsOpen, signupOpen, signupClose } from "../store/signup";
import { userRegister, userRegisterReceived, getAuth } from "../store/auth";
import Loading from "./Loading";

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

const listAses = [
  {
    label: "User",
    value: 1,
  },
  {
    label: "Doctor",
    value: 2,
  },
];

const Signup = () => {
  const open = useSelector(getSignupIsOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(signupOpen);
  };
  const handleClose = () => dispatch(signupClose);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const isEveryValueFil = (obj) =>
    Object.values(obj).every((item) => Boolean(item));
  const history = useHistory();

  const { loading, message } = useSelector(getAuth);

  const checkCanSubmit = () => {
    const newUser = {
      fullName,
      username,
      email,
      password,
      status,
      gender,
      phone,
      address,
    };
    if (isEveryValueFil(newUser)) {
      return true;
    }
    return false;
  };

  const isCanSubmit = checkCanSubmit();

  const handleSignup = async () => {
    if (!isCanSubmit) return;

    const newUser = {
      fullName,
      username,
      email,
      password,
      listId: Number(status),
      gender,
      phone,
      address,
    };
    const { type, payload } = await dispatch(userRegister(newUser));

    if (type === userRegisterReceived.type) {
      const { status } = payload;
      handleClose();
      if (status === "0") {
        history.push(HOME);
      }
      if (status === "1") {
        history.push(RESERVATION);
      }
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Sign up
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent>
          <h1
            style={{
              textAlign: "center",
              marginTop: "21px",
              marginBottom: "50px",
            }}
          >
            Sign up
          </h1>
          <p>{message}</p>
          {loading && <Loading />}
          {!loading && (
            <div>
              <h2>Full Name</h2>
              <TextField
                variant="filled"
                fullWidth
                value={fullName}
                onChange={saveValue(setFullName)}
              />
              <h2>Username</h2>
              <TextField
                variant="filled"
                fullWidth
                value={username}
                onChange={saveValue(setUsername)}
              />
              <h2>Email</h2>
              <TextField
                variant="filled"
                fullWidth
                type="email"
                value={email}
                onChange={saveValue(setEmail)}
              />
              <h2>Password</h2>
              <TextField
                variant="filled"
                fullWidth
                type="password"
                value={password}
                onChange={saveValue(setPassword)}
              />
              <h2>List As</h2>
              <TextField
                variant="filled"
                fullWidth
                select
                value={status}
                onChange={saveValue(setStatus)}
              >
                {listAses.map(({ label, value }) => (
                  <MenuItem value={value} key={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
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
              <h2>Phone</h2>
              <TextField
                variant="filled"
                fullWidth
                value={phone}
                onChange={saveValue(setPhone)}
              />
              <h2>Address</h2>
              <TextField
                multiline
                rows="6"
                variant="filled"
                fullWidth
                value={address}
                onChange={saveValue(setAddress)}
              />
            </div>
          )}
          <div
            style={{
              margin: "35px 0",
            }}
          >
            <Button
              disabled={!isCanSubmit || loading}
              color="secondary"
              variant="contained"
              fullWidth
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signup;
