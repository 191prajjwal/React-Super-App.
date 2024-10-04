import React, { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import { fetchWeather } from "../api/fetchWeather";

import humid from "../assets/humid.png";
import wind from "../assets/wind.png";
import pressure from "../assets/pressure.png";




export default function WeatherWidget() {


  const [weatherData, setWeatherData] = useState({});


  useEffect(() => {
    const data = fetchWeather().then((data) => {
      console.log(data);
      const { condition, humidity, wind_kph, temp_c, pressure_mb } =
        data.current;

      setWeatherData({
        text: condition.text,
        icon: condition.icon,
        humidity: humidity,
        wind: wind_kph,
        temperature: temp_c,
        pressure: pressure_mb,
        date: new Date().getDate().toString().padStart(2, "0"),
        month: new Date().getMonth().toString().padStart(2, "0"),
        year: new Date().getFullYear(),
      });

    });

    
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.timeStamp}>
        <p>{`${weatherData?.date}-${weatherData.month}-${weatherData?.year}`}</p>
        <p>
          {new Date()
            .toLocaleTimeString("en-IN", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })
            .toLocaleUpperCase()}
        </p>
      </div>

      <div className={styles.weatherInfo}>
        {weatherData ? (
          <div className={styles.weatherDiv}>
            <div className={styles.condition}>
              <img
                className={styles.weatherImg}
                src={weatherData.icon}
                alt="Weather Icon"
              />
              <p>{weatherData.text}</p>
            </div>

            <div className={styles.pipes}>|</div>

            <div className={styles.tempPress}>
              <p className={styles.temperature}>{weatherData.temperature} °C</p>
              <p className={styles.pressure}>
                <img src={pressure} />
                {weatherData.pressure} mbar <br />
                Pressure
              </p>
            </div>

            <div className={styles.pipes}>|</div>

            <div className={styles.windHumid}>
              <p className={styles.wind}>
                <img src={wind} alt="" />
                {weatherData.wind} km/h <br />
                Wind
              </p>

              <p className={styles.humidity}>
                <img src={humid} />
                {weatherData.humidity}% <br /> Humidity
              </p>
            </div>
          </div>
        ) : (
          "loading......"
        )}
      </div>
    </div>
  );
}
