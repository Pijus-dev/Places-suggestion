import React, { useState } from "react";

import DatePicker from "react-date-picker";

import { connect } from "react-redux";

import "./hotelpage.scss";

const Hotelpage = ({ location }) => {
  const [startDate, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState(1);

  if (endDate !== new Date()) {
    const nights = parseInt((endDate - startDate) / (1000 * 60 * 60 * 24), 10);
  }
  return (
    <div>
      <div className="container">
        <h2>{location ? location.name : null} Hotels and Places to Stay</h2>
        <div className="calendar">
          <div>
            <DatePicker
              onChange={onChange}
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
              <span className="icon" onClick={() => setCount(count - 1)}>
                &#8722;
              </span>
              {count}
              <span className="icon" onClick={() => setCount(count + 1)}>
                &#43;
              </span>
            </div>
            <p>Adults</p>
          </div>
          <button className="check-button">CHECK</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(Hotelpage);
