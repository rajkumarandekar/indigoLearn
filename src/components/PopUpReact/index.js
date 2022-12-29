import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import "./index.css";

const PopUpReact = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Click here to Enrol Now.
        </button>
      }
    >
      <form className="form-container">
        <h1 className="home-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <input className="input1" type="text" placeholder="Email ID" />
        <input className="input1" type="text" placeholder="Phone Number" />
        <div>
          <button type="submit" className="request-btn">
            Request Call Back
          </button>
        </div>
      </form>
    </Popup>
  </div>
);
export default PopUpReact;
