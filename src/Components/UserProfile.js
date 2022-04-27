import React, { useState } from "react";
import avatar from "../Images/user.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const UserProfile = () => {
  const [imageURL, setImageURL] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const profilePic = imageURL;
  };
  const handleImageUpload = (e) => {};

  return (
    <div className="col-12">
      <div className="card">
        <div className="row">
          <div className="col-md-4 bg-light text-center py-5">
            <img
              src={imageURL ? avatar : imageURL}
              alt="avatar"
              height="250px"
              className="p-3 p-sm-5"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="file"
                id="cardImg"
                name="cardImg"
                className="form-control"
                {...register("cardImg", {
                  required: "required",
                })}
              />
              <div className="text-center mt-2">
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Upload
                </Button>
              </div>
            </form>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
