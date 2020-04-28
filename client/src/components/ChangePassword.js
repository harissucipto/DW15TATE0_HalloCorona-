import React, { useState } from "react";
import { Dialog, Button, DialogContent, TextField } from "@material-ui/core";

const ChangePassword = ({ open, handleClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const [password] = useState("");
  const { onChangePassword } = (f) => f;

  const handleChangePassword = () => {
    if ([oldPassword, confirmPassword, newPassword].some((p) => !p)) {
      console.log("isi semua dulu");
      return;
    }
    console.log(password, oldPassword);
    if (oldPassword !== password) {
      console.log("password lama tidak sama dengan yang lama");
      return;
    }
    if (newPassword !== confirmPassword) {
      console.log("password baru tidak sama dengan konfirmasi password");
      return;
    }

    const resp = onChangePassword(newPassword);
    if (resp) {
      handleClose();
      console.log("berhasil");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "21px",
            marginBottom: "30px",
          }}
        >
          Change Password
        </h1>
        <div>
          <h2>Old Password</h2>
          <TextField
            variant="filled"
            fullWidth
            type="password"
            value={oldPassword}
            onChange={saveValue(setOldPassword)}
          />
          <h2>New Password</h2>
          <TextField
            variant="filled"
            fullWidth
            type="password"
            value={newPassword}
            onChange={saveValue(setNewPassword)}
          />

          <h2>Confirm Password</h2>
          <TextField
            variant="filled"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={saveValue(setConfirmPassword)}
          />
        </div>
        <div
          style={{
            marginTop: "35px",
            marginBottom: "20px",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            onClick={handleChangePassword}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
