export const fetchRestaurants = async (id) => {
  const response = await fetch(
    `https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=EUR&lang=en_US&location_id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
      },
    }
  );
  const info = await response.json();
  const { data } = info;
  const restaurantInfo = data
    .filter(
      ({ address, rating, description, cuisine }) =>
        address !== undefined &&
        rating > 3.5 &&
        description !== "" &&
        cuisine.length > 0
    )
    .map(
      ({
        address,
        name,
        photo,
        rating,
        cuisine,
        price,
        description,
        web_url,
      }) => {
        return {
          address,
          name,
          photo,
          rating,
          cuisine,
          price,
          description,
          web_url,
        };
      }
    );
  return restaurantInfo;
};

export const fetchAttractions = async (id) => {
  const response = await fetch(
    `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=EUR&sort=recommended&lunit=km&location_id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
      },
    }
  );
  const info = await response.json();
  const { data } = info;
  const attractionsInfo = data
    .filter(({ description, rating }) => description !== "" && rating > 3.5)
    .map(({ description, rating, photo, name, web_url, address }) => {
      return {
        description,
        rating,
        photo,
        name,
        web_url,
        address,
      };
    });
  // localStorage.setItem("attractions", JSON.stringify(attractionsInfo));
  return attractionsInfo;
};

export const fetchHotels = async (startDate, endDate, id, count) => {
  if (startDate !== new Date()) {
    const nights = parseInt((endDate - startDate) / (1000 * 60 * 60 * 24), 10);
    const response = await fetch(
      `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=EUR&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${id}&adults=${count}&checkin=${startDate}&rooms=1&nights=${nights}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key":
            "d58457cc4amshb522060edfd8f2ap1eccd6jsn96c470d9bda1",
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
    return hotelInfo;
  }
};
