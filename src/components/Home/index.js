import { useState } from "react";
import "./index.css";
import { GoSmiley } from "react-icons/go";
import { FcReading } from "react-icons/fc";
import { FiYoutube } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
function Home() {
  const [select, setSelect] = useState();

  return (
    <>
      <div className="home">
        <div className="container">
          <h1 className="home-heading">Become ACCA in 18 months</h1>
          <p className="p1">
            Acquire globally recognized accountancy qualification, ACCA (also
            called as Global CA), and get placed in top MNCs & Big4s.Begin ACCA
            prep with 1FIN now.
          </p>
          <div className="cards-container1">
            <div className="level-cards">
              <h1 className="level-h">Registered Users</h1>
              <div className="enter">
                <GoSmiley />
                <p className="para">249,022</p>
              </div>
            </div>
            <div className="level-cards">
              <h1 className="level-h">Courses Enrolled</h1>
              <div className="enter">
                <FcReading />
                <p className="para">65,171</p>
              </div>
            </div>
            <div className="level-cards col-6">
              <h1 className="level-h">Minutes Watched</h1>
              <div className="enter">
                <FiYoutube />
                <p className="para">2,090,935,459</p>
              </div>
            </div>
            <div className="level-cards col-6">
              <h1 className="level-h">Faculty</h1>
              <div className="enter">
                <MdPerson />
                <p className="para">8 Experts</p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="cards-container-mobile">
            <div className="level-cards1">
              <h1 className="level-h">Registered Users</h1>
              <div className="enter1">
                <GoSmiley />
                <p className="para">249,022</p>
              </div>
            </div>
            <div className="level-cards1">
              <h1 className="level-h">Courses Enrolled</h1>
              <div className="enter1">
                <FcReading />
                <p className="para">65,171</p>
              </div>
            </div>
          </div>
          <div className="cards-container-mobile">
            <div className="level-cards1">
              <h1 className="level-h">minutes Watched</h1>
              <div className="enter1">
                <FiYoutube />
                <p className="para">2,090,935,459</p>
              </div>
            </div>
            <div className="level-cards1">
              <h1 className="level-h">Faculty</h1>
              <div className="enter1">
                <MdPerson />
                <p className="para">8 Experts</p>
              </div>
            </div>
          </div>
          <img
            className="img"
            alt="img"
            src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg"
          />
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
      </div>
      <div></div>
      <div className="home1">
        <div className="destop-version">
          <h1 className="heading5">Become ACCA in 18 months</h1>
          <p className="p3">
            Acquire globally recognized accountancy qualification, ACCA (also
            called as Global CA), and get placed in top MNCs & Big4s.Begin ACCA
            prep with 1FIN now.
          </p>
          <div className="cards-container1">
            <div className="level-cards">
              <h1 className="level-h">Registered Users</h1>
              <div className="enter">
                <GoSmiley />
                <p className="para">249,022</p>
              </div>
            </div>
            <div className="level-cards">
              <h1 className="level-h">Courses Enrolled</h1>
              <div className="enter">
                <FcReading />
                <p className="para">65,171</p>
              </div>
            </div>
            <div className="level-cards col-6">
              <h1 className="level-h">Minutes Watched</h1>
              <div className="enter">
                <FiYoutube />
                <p className="para">2,090,935,459</p>
              </div>
            </div>
            <div className="level-cards col-6">
              <h1 className="level-h">Faculty</h1>
              <div className="enter">
                <MdPerson />
                <p className="para">8 Experts</p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="cards-container-mobile">
            <div className="level-cards1">
              <h1 className="level-h">Registered Users</h1>
              <div className="enter1">
                <GoSmiley />
                <p className="para">249,022</p>
              </div>
            </div>
            <div className="level-cards1">
              <h1 className="level-h">Courses Enrolled</h1>
              <div className="enter1">
                <FcReading />
                <p className="para">65,171</p>
              </div>
            </div>
          </div>
          <div className="cards-container-mobile">
            <div className="level-cards1">
              <h1 className="level-h">Minutes Watched</h1>
              <div className="enter1">
                <FiYoutube />
                <p className="para">2,090,935,459</p>
              </div>
            </div>
            <div className="level-cards1">
              <h1 className="level-h">Faculty</h1>
              <div className="enter1">
                <MdPerson />
                <p className="para">8 Experts</p>
              </div>
            </div>
          </div>
          <div className="margin1">
            <button type="button" className="request-btn2">
              Download Brochure
            </button>
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

      <div className="main">
        <h1>Why Choose Us?</h1>
        <hr />
      </div>
    </>
  );
}

export default Home;
