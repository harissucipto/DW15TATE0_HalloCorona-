import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

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
      <Grid
        container
        spacing={4}
        justify="flex-end"
        alignItems="center"
        style={{ margin: "0px", height: "100%" }}
      >
        {isLogin ? (
          isUser ? (
            <Grid item>
              <User />
            </Grid>
          ) : (
            <Grid item>
              <Doctor />
            </Grid>
          )
        ) : (
          <>
            <Grid item>
              <Signin />
            </Grid>
            <Grid item>
              <Signup />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Auth;
