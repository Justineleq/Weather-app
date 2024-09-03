import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {

  const currentTime = new Date(weatherData.current.time);
  // const timezone = weatherData.utc_offset_seconds;


  // console.log(currentTime, 'current time');
  // console.log(timezone, 'timezone');:

  return (
    <div className={styles.wrapper}>
      <h2>
        {`
        ${getWeekDay(currentTime)}
        ${getTime(unitSystem, currentTime)}
        ${getAMPM(unitSystem, currentTime)}
        `}  
      </h2>
    </div>
  );
};
