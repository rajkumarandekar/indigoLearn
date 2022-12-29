import "./index.css";
import { TiTick } from "react-icons/ti";

const Eligibility = () => (
  <div className="eligibility-container">
    <h1 className="acca63">ACCA - Eligibility</h1>
    <hr />
    <h1 className="eli">
      To appear for the ACCA course examination a candidate should have
    </h1>
    <p className="li">
      <TiTick /> Qualified the 10+2 exams
    </p>
    <p className="li">
      <TiTick /> An aggregate of 65% in Mathematics / Accounts and English and a
      minimum of 50% in other subjects
    </p>
  </div>
);
export default Eligibility;
