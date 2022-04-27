import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const SignUp = () => {
  const [ifAgree, setIfAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /*  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  }; */

  const { createNewUser } = useAuth();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.email;
    const password = data.password;
    createNewUser(fullName, email, password, navigate);
  };
  const handleCheckBox = (e) => {
    setIfAgree(e.target.checked);
  };
  return (
    <section>
      <div className="container-fluid bg-light min-vh-100 pb-3">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow p-2 p-sm-4">
              <div className="text-center mb-4">
                <p className="display-6 text-muted">Sign Up</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="row g-4 justify-content-center"
              >
                <div className="col-sm-8">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full name"
                    className="form-control"
                    {...register("fullName", {
                      required: "this field is required",
                      minLength: {
                        value: 4,
                        message: "min length 4 characters",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
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
                      id="password"
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
                <div className="col-sm-8">
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="confirm password"
                      className="form-control"
                      {...register("confirm_password", {
                        required: "this field is required",
                        validate: (value) =>
                          value === getValues("password") ||
                          "password doesn't match",
                      })}
                    />
                    <button
                      className="btn border text-muted"
                      type="button"
                      id="confirm_password"
                      onClick={() =>
                        setShowConfirmPassword((prevState) => !prevState)
                      }
                    >
                      {!showConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                  {errors.confirm_password && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.confirm_password.message}
                    </span>
                  )}
                </div>
                <div className="col-sm-8 form-check ms-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreement"
                    name="agreement"
                    onChange={handleCheckBox}
                  />
                  <label className="form-check-label" htmlFor="agreement">
                    I agree to terms and conditions & privacy policy
                  </label>
                </div>
                {ifAgree ? (
                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      endIcon={<PersonAddAltIcon />}
                    >
                      Create
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      endIcon={<PersonAddAltIcon />}
                      disabled
                    >
                      Create
                    </Button>
                  </div>
                )}
              </form>
              <div className="text-center mt-4">
                <p>
                  <span className="text-muted">
                    If already have an account?
                  </span>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/login"
                    className="ms-3"
                  >
                    Login
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

export default SignUp;
