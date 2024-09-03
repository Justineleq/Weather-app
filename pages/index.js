import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";

import styles from "../styles/Home.module.css";
import chosenCity from "../config";
import { getWeatherDescription } from "../services/helpers";

export const App = () => {
  const [cityInput, setCityInput] = useState(chosenCity);
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");


  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityInput }),
      });
      const data = await res.json();
      setWeatherData({ ...data });
      setCityInput("");
      getWeatherDescription({...weatherData});
    };
    getData();
  }, [triggerFetch]);

  console.log(weatherData, 'fetched data');

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={chosenCity.city}
        country={chosenCity.country}
        //This works but to be honest I'm not sure why I have to repeat what I have in my maincard.
        description= {getWeatherDescription(weatherData).description}
        iconName= {getWeatherDescription(weatherData).image}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      
      
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
          <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
          <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : (

    <LoadingScreen loadingMessage="Loading data..." />
  )

};

export default App;
