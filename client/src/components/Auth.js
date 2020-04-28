import React from "react";
import { useSelector } from "react-redux";

import { checkIsLogin, checkIsUser } from "../store/auth";
import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Doctor from "./Doctor";

const Auth = () => {
  const isLogin = useSelector(checkIsLogin);
  const isUser = useSelector(checkIsUser);

  return (
    <div>
      {isLogin ? (
        isUser ? (
          <User />
        ) : (
          <Doctor />
        )
      ) : (
        <>
          <Signin />
          <Signup />
        </>
      )}
    </div>
  );
};

export default Auth;
