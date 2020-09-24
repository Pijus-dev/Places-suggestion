import React from "react";

import DatePicker from "react-date-picker";

import "./calendar.scss";

import { connect } from "react-redux";

const Calendar = ({
  location,
  fetchHotels,
  startDate,
  onChange,
  endDate,
  count,
  decreaseCount,
  increaseCount,
  setEndDate,
}) => {
  return (
    <div className="container">
      <h2>{location ? location.name : null} Hotels and Places to Stay</h2>
      <div className="calendar">
        <div>
          <DatePicker
            onChange={(value) => onChange(value)}
            value={startDate}
            format="yy-MM-dd"
            className="check-in"
          />
          <p>Check-in</p>
        </div>
        <div>
          <DatePicker
            value={endDate}
            onChange={(value) => setEndDate(value)}
            format="yy-MM-dd"
            className="check-out"
          />
          <p>Check-out</p>
        </div>
        <div className="count">
          <div className="people">
            <span className="icon" onClick={() => decreaseCount(count - 1)}>
              &#8722;
            </span>
            {count}
            <span className="icon" onClick={() => increaseCount(count + 1)}>
              &#43;
            </span>
          </div>
          <p>Adults</p>
        </div>
        <button onClick={fetchHotels} className="check-button">
          CHECK
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(Calendar);
