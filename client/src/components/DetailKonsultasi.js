import React, { useState } from "react";
import { Dialog, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import ItemKonsultasi from "./ItemKonsultasi";

const DetailKonsultasi = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Search color="primary" />
      </IconButton>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <ItemKonsultasi  {...data}/>
      </Dialog>
    </>
  );
};

export default DetailKonsultasi;
