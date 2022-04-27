import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useAuth();

  const location = useLocation();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    userLogin(email, password, navigate, location);
  };
  return (
    <section>
      <div className="container-fluid bg-light min-vh-100 pb-3">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow p-2 p-sm-4">
              <div className="text-center mb-4">
                <p className="display-6 text-muted">Log In</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="row g-4 justify-content-center"
              >
                <div className="col-sm-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className="form-control"
                    {...register("email", {
                      required: "this field is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "does't match email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="col-sm-8">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                      {...register("password", {
                        required: "this field is required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                          message:
                            "min length 8 characters and uppercase,lowercase,number",
                        },
                      })}
                    />
                    <button
                      className="btn border text-muted"
                      type="button"
                      id="confirm_password"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    >
                      {!showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<LoginIcon />}
                  >
                    Login
                  </Button>
                </div>
              </form>
              <div className="text-center mt-4">
                <p>
                  <span className="text-muted">Don't have an account?</span>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/signup"
                    className="ms-3"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
