import React from "react";
const Loggedin = () => {
  // dissaper login text
  let status = "Logged in";
  setTimeout(() => {
    status = "";
  }, 1500);
  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default Loggedin;
