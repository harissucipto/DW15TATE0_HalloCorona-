import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import FormAddArticle from "../components/FormAddArticle";
import Header from "../components/Header";
import { checkIsDoctor } from "../store/auth";
import { HOME } from "../constants/routes";

const AddArticle = () => {
  const isDoctor = useSelector(checkIsDoctor);
  if (!isDoctor) return <Redirect to={HOME} />;

  return (
    <div>
      <Header />
      <div>
        <FormAddArticle />
      </div>
    </div>
  );
};

export default AddArticle;
