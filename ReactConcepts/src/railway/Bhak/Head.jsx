import { FaLocationArrow } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Head.css";
const Head = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="header">
        <h1>BOOK TICKET</h1>
        <div className="header-container">
          <div className="header-loc">
            <div className="loc-items">
              <FaLocationArrow className="header-icon" />
              <input type="text" placeholder="From" />
            </div>
            <div className="loc-items2">
              <FaMapMarker className="header-icon" />
              <input type="text" placeholder="To" />
            </div>
          </div>
          <div className="header-loc">
            <div className="header-date">
              <BsFillCalendarDateFill className="header-icon" />
              <DatePicker
                className="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="header-class">
              <MdOutlineWork className="header-icon" />
              <div className="dropdown">
                <input type="text" placeholder="All Classes" />
                <RiArrowDropDownLine />
              </div>
              <div className="class">
                <li>SLEEPER (S)</li>
                <li>AC 2 TIER (2A)</li>
                <li>FIRST CLASS (F)</li>
              </div>
            </div>
          </div>
        </div>
        <button className="headerbtn">Search</button>
      </div>
    </>
  );
};

export default Head;
