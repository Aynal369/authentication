import React from "react";
import useAuth from "../Hook/useAuth";
import avatar from "../Images/user.png";

const Home = () => {
  const { loggedInUser } = useAuth();
  console.log(loggedInUser);
  return (
    <main className="bg-light min-vh-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="card shadow p-3 p-sm-5">
              <div className="d-flex justify-content-center">
                <p className="text-muted display-6 me-2">Hello,</p>
                <h3 className="mt-4 opacity-50">{loggedInUser.displayName}</h3>
              </div>
              <div className="text-center mt-4">
                {loggedInUser.photoUrl ? (
                  <img
                    src={loggedInUser.photoUrl}
                    alt={loggedInUser.displayName}
                    width="62px"
                  />
                ) : (
                  <img
                    src={avatar}
                    alt={loggedInUser.displayName}
                    width="62px"
                  />
                )}
              </div>
              <div className="card border-0 shadow mt-4 p-4">
                <div className="d-flex justify-content-evenly">
                  <p className="fw-bold">Your email:</p>
                  <p>{loggedInUser.email}</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <p className="fw-bold">Creation Time:</p>
                  <p>{loggedInUser.metadata?.creationTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
