import React from "react";
import { Link } from "react-router-dom";
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
                {/* <p className="mt-4 text-muted">
                  If you update your profile? please go{" "}
                  <span>
                    <Link to="/about-me" style={{ textDecoration: "none" }}>
                      About Me
                    </Link>
                  </span>{" "}
                  page
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
