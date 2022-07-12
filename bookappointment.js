import react from "react";
import Link from "react-router-dom/Link";

const Bookappointment = () => {
  return (
    <div className="container">
      <div className="signin-up">
        <p>Welcome!</p>

        <div className="float-right">
          <Link to="/signin" className="button" id="loginbtn">
            Login
          </Link>
        </div>

        <div className="float-right">
          <Link to="/signup" className="button" id="signupbtn">
            SignUp
          </Link>
        </div>
      </div>
      <p className="large-font">
        To book an appointment, Login/ SignUp. You will receive a confirmation
        message for the appointment.
      </p>
    </div>
  );
};

export default Bookappointment;
