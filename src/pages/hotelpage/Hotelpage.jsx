import React, { useState } from "react";

import Product from "../../components/product/Product";
import { useParams } from "react-router-dom";
import Calendar from "../../components/calendarPicker/Calendar";
import { fetchHotels } from "../../api/api";

import "./hotelpage.scss";

const Hotelpage = ({ location }) => {
  const [startDate, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const [hotels, setHotels] = useState([]);

  const locationId = useParams();

  const fetchHotels = async () => {
    if (startDate !== new Date()) {
      const nights = parseInt(
        (endDate - startDate) / (1000 * 60 * 60 * 24),
        10
      );
      const response = await fetch(
        `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=EUR&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${locationId.id}&adults=${count}&checkin=${startDate}&rooms=1&nights=${nights}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_MY_API_KEY}`,
          },
        }
      );
      const info = await response.json();
      const { data } = info;
      const hotelInfo = data
        .slice(1, 20)
        .map(({ location_string, price, name, photo, rating, ranking }) => {
          return {
            location_string,
            price,
            name,
            photo,
            rating,
            ranking,
          };
        });
      setHotels(hotelInfo);
    }
  };

  return (
    <div>
      <div className="background-photo">
        <Calendar
          startDate={startDate}
          endDate={endDate}
          count={count}
          setEndDate={setEndDate}
          onChange={onChange}
          increaseCount={setCount}
          decreaseCount={setCount}
          fetchHotels={fetchHotels}
        />
      </div>
      {hotels.length > 0 ? (
        <div className="productGrid">
          {hotels.map((props) => {
            return <Product {...props} key={props.name} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Hotelpage;
