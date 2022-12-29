import "./Navbar.css";
import "./index.css";

import { Component } from "react";
import { HiShoppingCart } from "react-icons/hi";
import {
  AiOutlineClose,
  AiFillCalculator,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { ImFilesEmpty, ImPlay, ImArrowRight, ImMobile2 } from "react-icons/im";
import { SiGooglescholar } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { GoFileSymlinkDirectory, GoPlay } from "react-icons/go";
import {
  RiCalendar2Line,
  RiNewspaperLine,
  RiPencilFill,
  RiQuestionnaireFill,
} from "react-icons/ri";
import { TiMessages, TiNews } from "react-icons/ti";
import { MdLiveTv } from "react-icons/md";

import PopUpButton from "../PopUpButton";
class Header extends Component {
  state = { showRoutingSection: false };

  showBottomBar = () => {
    this.setState((prevState) => ({
      showRoutingSection: !prevState.showRoutingSection,
    }));
  };

  render() {
    const { showRoutingSection } = this.state;
    return (
      <>
        <div className="navbar">
          <FaBars className="menu-bars" onClick={this.showBottomBar} />
          <h1>IndigoLearn</h1>
          <div className="courses">
            <h1>BUY COURSES</h1>
            <h1>BUY BOOKS</h1>
            <h1>PROGRAMS</h1>
            <h1>FREE RESOURCES</h1>
          </div>
          <div className="button-container">
            <PopUpButton />
          </div>
          <div className="cart">
            <HiShoppingCart className="icon2" />
          </div>
        </div>
        <nav className={showRoutingSection ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={this.showBottomBar}>
            <li className="navbar-toggle">
              <h1>Indigolearn</h1>
              <AiOutlineClose className="menu-bars" />
            </li>
            <FaUserCircle className="icon3" />
            <p>Login/Signup</p>

            <li className="slider-li">
              <ImFilesEmpty className="slider-icons" />
              <span>Buy Courses</span>
              <IoIosArrowForward />
            </li>
            <li className="slider-li">
              <ImArrowRight className="slider-icons" />
              <span>Programs</span>
              <IoIosArrowForward />
            </li>
            <li className="slider-li">
              <SiGooglescholar className="slider-icons" />
              <span>Scholarship</span>
            </li>
            <li className="slider-li">
              <ImPlay className="slider-icons" />
              <span>Free Courses</span>
            </li>
            <li className="slider-li">
              <GoFileSymlinkDirectory className="slider-icons" />
              <span>Free Resources</span>
            </li>
            <li className="slider-li">
              <RiCalendar2Line className="slider-icons" />
              <span>Study Planner</span>
            </li>
            <li className="slider-li">
              <RiNewspaperLine className="slider-icons" />
              <span>MCQs</span>
            </li>
            <li className="slider-li">
              <TiMessages className="slider-icons" />
              <span>Formus</span>
            </li>
            <li className="slider-li">
              <AiFillCalculator className="slider-icons" />
              <span>Firm Reviews</span>
            </li>
            <li className="slider-li">
              <GoPlay className="slider-icons" />
              <span>Free Videos</span>
            </li>
            <li className="slider-li">
              <TiNews className="slider-icons" />
              <span>News Updates</span>
            </li>
            <li className="slider-li">
              <RiPencilFill className="slider-icons" />
              <span>Course Guides</span>
            </li>
            <li className="slider-li">
              <RiQuestionnaireFill className="slider-icons" />
              <span>FAQ</span>
            </li>
            <li className="slider-li">
              <AiOutlineFileText className="slider-icons" />
              <span>Blogs</span>
            </li>
            <li className="slider-li">
              <MdLiveTv className="slider-icons" />
              <span>Youtube Live</span>
            </li>
            <li className="slider-li">
              <ImMobile2 className="slider-icons" />
              <span>APP 1FIN</span>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
export default Header;
