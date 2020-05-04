import React, { useState, useEffect } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ExitToApp, PermIdentity, RestorePage } from "@material-ui/icons";

import { HOME, PROFILE, CONSULTATION } from "../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { getUser, userLogout, getInfoUserLogin } from "../store/auth";

const User = () => {
  const [anchorEl, setAncorEl] = useState(null);
  const handleClick = (evt) => setAncorEl(evt.currentTarget);
  const handleClose = () => setAncorEl(null);

  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  const user = useSelector(getUser);
  const titleAvatar =
    user.fullName
      ?.split(" ")
      .map((item) => item.slice(0, 1))
      .join("")
      .toUpperCase() || "U";

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout);
    history.push(HOME);
  };

  useEffect(() => {
    dispatch(getInfoUserLogin);
  }, [dispatch]);

  return (
    <>
      <Avatar
        onClick={handleClick}
        style={{
          backgroundColor: "pink",
          cursor: "pointer",
        }}
      >
        {titleAvatar}
      </Avatar>
      <Menu
        style={{ marginTop: "55px" }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigate(PROFILE)}>
          <PermIdentity color="secondary" />
          <span style={styles.titleIcon}>Profile </span>
        </MenuItem>
        <MenuItem onClick={handleNavigate(CONSULTATION)}>
          <RestorePage color="secondary" />
          <span style={styles.titleIcon}>Consultation</span>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleLogout}>
          <ExitToApp color="secondary" />
          <span style={styles.titleIcon}>Logout</span>
        </MenuItem>
      </Menu>
    </>
  );
};

const styles = {
  titleIcon: {
    fontWeight: "bold",
    paddingLeft: "10px",
  },
};

export default User;
