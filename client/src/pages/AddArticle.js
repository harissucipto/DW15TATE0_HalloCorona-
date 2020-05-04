import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import FormAddArticle from "../components/FormAddArticle";
import Header from "../components/Header";
import { checkIsDoctor } from "../store/auth";
import { HOME } from "../constants/routes";
import Title from "../components/Title";

const AddArticle = () => {
  const isDoctor = useSelector(checkIsDoctor);
  if (!isDoctor) return <Redirect to={HOME} />;

  return (
    <div>
      <Header />
      <hr />
      <div className="sub-rumah">
        <Title text="Add Article" />
        <FormAddArticle />
      </div>
    </div>
  );
};

export default AddArticle;
