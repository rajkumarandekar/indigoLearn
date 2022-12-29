import "./index.css";
import { GiOpenBook } from "react-icons/gi";

import { MdAlarmOn, MdLaptopWindows } from "react-icons/md";

import { AiFillCalendar } from "react-icons/ai";

const AccaSection = () => (
  <>
    <div className="cards-container1">
      <div className="level-cards">
        <h1 className="level-h">Levels</h1>
        <div className="enter">
          <GiOpenBook />
          <p className="para">Three (13 papers)</p>
        </div>
      </div>
      <div className="level-cards">
        <h1 className="level-h">Duration</h1>
        <div className="enter">
          <MdAlarmOn />
          <p className="para">6-30 months</p>
        </div>
      </div>
      <div className="level-cards col-6">
        <h1 className="level-h">Exams</h1>
        <div className="enter">
          <MdLaptopWindows />
          <p className="para">Quarterly (Online)</p>
        </div>
      </div>
      <div className="level-cards col-6">
        <h1 className="level-h">Exemptions</h1>
        <div className="enter">
          <AiFillCalendar />
          <p className="para">Upto 9 papers</p>
        </div>
      </div>
    </div>
    {/* Mobile */}
    <div className="cards-container-mobile">
      <div className="level-cards1">
        <h1 className="level-h">Levels</h1>
        <div className="enter1">
          <GiOpenBook />
          <p className="para">Three (13 papers)</p>
        </div>
      </div>
      <div className="level-cards1">
        <h1 className="level-h">Duration</h1>
        <div className="enter1">
          <MdAlarmOn />
          <p className="para">6-30 months</p>
        </div>
      </div>
    </div>
    <div className="cards-container-mobile">
      <div className="level-cards1">
        <h1 className="level-h">Exams</h1>
        <div className="enter1">
          <MdLaptopWindows />
          <p className="para">Quarterly (Online)</p>
        </div>
      </div>
      <div className="level-cards1">
        <h1 className="level-h">Exemptions</h1>
        <div className="enter1">
          <AiFillCalendar />
          <p className="para">Upto 9 papers</p>
        </div>
      </div>
    </div>
  </>
);
export default AccaSection;
