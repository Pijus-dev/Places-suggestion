import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import DatePicker from "react-date-picker";

import "./flightspage.scss";

const FlightsPage = ({ location }) => {
  const [date, setDate] = useState(new Date());

  const [departure, setDeparture] = useState("");
  const [placeId, setPLaceId] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);

  const [airportId, setAirportId] = useState("");

  const getDestinationsPlaceId = async () => {
    const response = await fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/LT/EUR/en-GB/?query=London`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
        },
      }
    );
    const info = await response.json();
    const { Places } = info;
    const airportsId = Places.map(({ PlaceId, PlaceName }) => {
      return {
        PlaceId,
        PlaceName,
      };
    });
    setPLaceId(airportsId);
  };

  const getCountriesCode = async () => {
    const res = await fetch(
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
        },
      }
    );
    const data = await res.json();
    const { Countries } = data;

    setCountriesCode(Countries);
  };

  const getFlightDetails = async () => {
    const response = await fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/EUR/en-US/${departure}/${airportId}/${date
        .toISOString()
        .slice(0, 10)}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
        },
      }
    );

    const data = await response.json();
    const { Places, Quotes } = data;
    const placesArray = Places.map(({ PlaceId, Name }) => {
      return {
        PlaceId,
        Name,
      };
    });
  };

  useEffect(() => {
    getCountriesCode();
    getDestinationsPlaceId();
  }, []);

  return (
    <div className="backgroundImage">
      <div className="container">
        <h2>Best flight rates to </h2>
      </div>
      <div className="bookingSection">
        <div className="bookingInputs">
          <select
            onChange={(e) => setDeparture(e.target.value)}
            className="searchInput"
          >
            {countriesCode.map(({ Code, Name }) => (
              <option key={Code} value={Code}>
                {Name}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setAirportId(e.target.value)}
            className="searchInput"
          >
            {placeId.map(({ PlaceId, PlaceName }) => (
              <option key={PlaceId} value={PlaceId}>
                {PlaceName}
              </option>
            ))}
          </select>
          <DatePicker
            value={date}
            onChange={(value) => setDate(value)}
            className="startDate"
          />
        </div>
        <button className="searchButton" onClick={getFlightDetails}>
          Search Flights
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

export default connect(mapStateToProps)(FlightsPage);
