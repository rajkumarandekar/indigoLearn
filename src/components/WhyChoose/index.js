import "./index.css";

import {

  HiOutlineLightBulb,

  HiClock,
} from "react-icons/hi";
import { MdLaptop, MdContentPaste } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";
import { AiTwotoneLike, AiFillDownSquare } from "react-icons/ai";

const WhyChoose = () => (
  <div>
    <h1 className="cca">Why Choose Us?</h1>
    <hr />
    <div className="main-container">
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <img
              src="https://www.indigolearn.com/media/images/ca_concept.png"
              alt="k"
              className="imgo"
            />
            <h1>Conceptual</h1>
          </div>
          <div className="ui">
            <p className="p1">Regular Live Classes</p>
          </div>
          <div className="ui">
            <p className="p1">Expert Faculty</p>
          </div>
          <div className="ui">
            <p className="p1">Exam Oriented Content</p>
          </div>
          <div className="ui">
            <p className="p1">Dedicated Discussions Forms</p>
          </div>
          <div className="ui">
            <p className="p1">Continous Support</p>
          </div>
        </div>
      </div>
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <img
              src="https://www.indigolearn.com/media/images/ca_unlimited_views.png"
              alt="j"
              className="imgo"
            />
            <h1>Comprehensive</h1>
          </div>
          <div className="ui">
            <MdLaptop className="icons1" />
            <p className="p1">Exhaustive Q & A Bank</p>
          </div>
          <div className="ui">
            <MdContentPaste className="icons1" />
            <p className="p1">1000s of MCQs for practice</p>
          </div>
          <div className="ui">
            <HiClock className="icons1" />
            <p className="p1">Tests at regular intervals</p>
          </div>
          <div className="ui">
            <BsFiles className="icons1" />
            <p className="p1">Mock Exams</p>
          </div>
          <div className="ui">
            <HiOutlineLightBulb className="icons1" />
            <p className="p1">Analysis of Answer Sheets</p>
          </div>
        </div>
      </div>
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <img
              src="https://www.indigolearn.com/media/images/ca_top_faculties.png"
              alt="jk"
              className="imgo"
            />
            <h1>Career Oriented</h1>
          </div>
          <div className="ui">
            <MdContentPaste className="icons1" />
            <p className="p1">Business Communication</p>
          </div>
          <div className="ui">
            <BiLockAlt className="icons1" />
            <p className="p1">Resume Building</p>
          </div>
          <div className="ui">
            <AiTwotoneLike className="icons1" />
            <p className="p1">Negotiation Skills</p>
          </div>
          <div className="ui">
            <AiFillDownSquare className="icons1" />
            <p className="p1">Mock Interviews</p>
          </div>
          <div className="ui">
            <FaWpforms className="icons1" />
            <p className="p1">Placement Services</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default WhyChoose;
