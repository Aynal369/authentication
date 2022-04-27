import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AddProfile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="col-12">
      <div className="card">
        <div className="row">
          <div className="col-md-4 bg-light text-center py-5">
            <img src="" alt="avatar" height="250px" className="p-3 p-sm-5" />
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

export default AddProfile;
