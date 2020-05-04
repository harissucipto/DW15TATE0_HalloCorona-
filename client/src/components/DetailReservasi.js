import React, { useState } from "react";
import { Dialog, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import ItemReservasi from "./ItemReservasi";

const DetailReservasi = ({ data, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Search color="primary" />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        scroll="body"
      >
        <ItemReservasi handleCloseReservasi={handleClose} {...data} id={id} />
      </Dialog>
    </>
  );
};

export default DetailReservasi;
