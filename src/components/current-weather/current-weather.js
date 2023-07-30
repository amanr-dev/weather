import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`pngs/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      {/* Bottom  */}
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          {/* parameter row */}
          <div className="parameter-row">
            <span className="parameter-day">Today</span>
          </div>
          {/* end of parameter row */}
          {/* parameter row */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          {/* end of parameter row */}

          {/* parameter row */}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          {/* end of parameter row */}
          {/* parameter row */}
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* end of parameter row */}
          {/* parameter row */}
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure}hPa</span>
          </div>
          {/* end of parameter row */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
