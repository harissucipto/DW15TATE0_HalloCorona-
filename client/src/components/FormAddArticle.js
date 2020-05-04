import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import {
  articleCreate,
  articleCreateReceived,
  getArticles,
} from "../store/articles";
import Loading from "./Loading";

const FormAddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const isEveryValueFil = (obj) =>
    Object.values(obj).every((item) => Boolean(item));

  const history = useHistory();
  const dispatch = useDispatch();

  const checkCanSubmit = () => {
    const data = {
      title,
      description,
    };
    if (isEveryValueFil(data)) {
      return true;
    }

    return false;
  };

  const isCanSubmit = checkCanSubmit();

  const handleSubmit = async () => {
    const data = {
      title,
      description,
    };
    const { type, payload } = await dispatch(articleCreate(data));
    if (type === articleCreateReceived.type) {
      const { id } = payload;
      history.push(`/detail-artikel/${id}`);
    }
  };

  const { loading, message } = useSelector(getArticles);

  if (loading) return <Loading />;

  return (
    <div>
      <p>{message}</p>
      <div style={{ margin: "2rem 2rem" }}>
        <div>
          <h2>Title</h2>
          <TextField
            variant="filled"
            fullWidth
            value={title}
            onChange={saveValue(setTitle)}
          />
          <Button disabled>Upload Foto</Button>
          <h2>Description</h2>
          <TextField
            multiline
            rows="6"
            variant="filled"
            fullWidth
            value={description}
            onChange={saveValue(setDescription)}
          />
        </div>
      </div>

      <div
        style={{
          width: "300px",
          margin: "0 auto",
          borderRadius: "5px",
          marginTop: "88px",
        }}
      >
        <Button
          disabled={!isCanSubmit}
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormAddArticle;
