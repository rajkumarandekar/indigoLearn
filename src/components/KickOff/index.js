import { useState } from "react";
import "./index.css";
function KickOff() {
  const [select, setSelect] = useState();
  return (
    <>
      <div className="home">
        <div className="container">
          <h1 className="home-heading">
            Kick Off Your ACCA Prep journey with Indigolearn
          </h1>
          <p className="p1">
            Sign-in and get instant access to our FREE Courses
          </p>
          <form className="form-container">
            <h1 className="home-heading">
              Aspiring to be an ACCA? Get in touch with us!
            </h1>
            <input className="input" type="text" placeholder="Email ID" />
            <input className="input" type="text" placeholder="Phone Number" />
            <select
              className="input"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option>CA</option>
              <option>Bcom</option>
              <option>CS</option>
              <option>CMA</option>
              <option>Others</option>
            </select>
            <div>
              <button type="submit" className="request-btn">
                Request Call Back
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>

      <div className="home1">
        <div className="destop-version">
          <h1 className="heading5">
            Kick Off Your ACCA Prep journey with Indigolearn
          </h1>
          <p className="p3">
            Sign-in and get instant access to our FREE Courses
          </p>

          <div className="margin1">
            <img
              className="img-d"
              alt="img"
              src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
            />
          </div>
        </div>
        <form className="form-container">
          <h1 className="home-heading">
            Aspiring to be an ACCA? Get in touch with us!
          </h1>
          <input className="input" type="text" placeholder="Email ID" />
          <input className="input" type="text" placeholder="Phone Number" />
          <select
            className="input"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option className="input">CA</option>
            <option>Bcom</option>
            <option>CS</option>
            <option>CMA</option>
            <option>Others</option>
          </select>
          <select
            className="input"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option>ACCA Level1</option>
            <option>ACCA Level2</option>
            <option>ACCA Level3</option>
          </select>
          <div>
            <button type="submit" className="request-btn">
              Request Call Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default KickOff;
