import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import { FcGoogle } from "react-icons/fc";
import { HiUserCircle } from "react-icons/hi";

import "./index.css";

const PopUpButton = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <div className="sign-container">
          <HiUserCircle className="login-icon" />
          Login/Signup
        </div>
      }
    >
      <form className="form-container">
        <h1 className="home-heading">Sign in to your IndigoLearn account</h1>
        <div className="google-container">
          <FcGoogle className="g-icon" />
          Sign to Google
        </div>
        <p className="home-heading">Or</p>
        <h1 className="home-heading">
          Already have an account? Sign in using phone
        </h1>
        <input
          className="input1"
          type="text"
          placeholder="+91 Enter Your Phone Number"
        />
        <div className="div1">
          <button type="button" className="bt-1">
            Get Otp Message
          </button>
        </div>
        <div className="div1">
          <input type="checkbox" />
          <p className="p13">I accept T&C and Privacy_Policy</p>
        </div>
      </form>
    </Popup>
  </div>
);
export default PopUpButton;
