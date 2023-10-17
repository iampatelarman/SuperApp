import React from "react";
import UserCard from "../../components/userCard/UserCard";
import WeatherCard from "../../components/weatherCard/WeatherCard";
import NewsCard from "../../components/newsCard/NewsCard";

const HomePage = () => {
  return (
    <div className="container">
      <div className="homepage">
        <div>
          <UserCard />
          <WeatherCard />
        </div>
        <div>
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
