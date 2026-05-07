import React from "react";
import "./Auth.css";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="Login">
        <SignIn/>
    </div>
  );
};

export default Login;
