import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
  isoToLocalTimeFrench,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime) =>
  unitSystem == "metric"
    ? isoToLocalTimeFrench(currentTime)
    : timeTo12HourFormat(isoToLocalTimeFrench(currentTime));

export const getAMPM = (unitSystem, currentTime) =>
  unitSystem === "imperial"
    ? isoToLocalTimeFrench(currentTime).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (isoDateTime) => {
  const weekday = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const date = new Date(isoDateTime);
  return weekday[date.getDay()];

};
console.log(getWeekDay());
// export const getWeatherCode = (weatherData) => {
//   const weatherCode = []
//   weatherCode[0] = "Clear sky";
//     weatherCode[1,2,3] = "Mainly clear, partly cloudy, and overcast";
//     weatherCode[45, 48] = "Fog and depositing rime fog";
//     weatherCode[51, 53, 55]	= "Drizzle: Light, moderate, and dense intensity";
//     weatherCode[56, 57] =	"Freezing Drizzle: Light and dense intensity";
//     weatherCode[61, 63, 65] =	"Rain: Slight, moderate and heavy intensity";
//     weatherCode[66, 67]	= "Freezing Rain: Light and heavy intensity";
//     weatherCode[71, 73, 75] =	"Snow fall: Slight, moderate, and heavy intensity";
//     weatherCode[77] =	"Snow grains";
//     weatherCode[80, 81, 82]	= "Rain showers: Slight, moderate, and violent";
//     weatherCode[85, 86] =	"Snow showers slight and heavy";
//     weatherCode[95] =	"Thunderstorm: Slight or moderate";
//     weatherCode[96, 99] =	"Thunderstorm with slight and heavy hail";

//     return weatherCode[weatherData.weather_code

//     ];

// };


