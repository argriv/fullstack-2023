import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../graphql/user/mutation";
import { saveTokens } from "../utils/token";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [check, setCheck] = useState(false);

  const [registerUser, { data, error, loading }] = useMutation(REGISTER_USER, {
    variables: {
      username,
      secret,
    },
    onError(err) {
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  if (error) {
    toast(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  if (data) {
    if (check) saveTokens(data.register.token);
    toast("Registration successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [navigate, data]);
  return (
    <Card className="w-96 m-auto min-h-screen justify-center">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="User name"
          size="lg"
        />
        <Input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          label="Password"
          size="lg"
        />
        <div className="-ml-2.5">
          <Checkbox
            label="Remember Me"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={registerUser}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          You already have an account?
          <Typography variant="small" color="blue" className="ml-1 font-bold">
            <Link to="/login">Sign up</Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};
