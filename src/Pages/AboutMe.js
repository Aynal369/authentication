import React from "react";
import AddProfile from "../Components/AddProfile";
import UserProfile from "../Components/UserProfile";

const AboutMe = () => {
  return (
    <main className="bg-light min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <AddProfile />
          {/*   <UserProfile /> */}
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
