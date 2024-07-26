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

export const getWeatherDescription = (weatherData) => {
  const weatherDescription = {
    0: "Ciel dégagé",
    1: "Principalement clair",
    2: "Partiellement nuageux",
    3: "Couvert",
    45: "Brouillard",
    48: "Brouillard givrant déposé",
    51: "Bruine légère",
    53: "Bruine modérée",
    55: "Bruine dense intense",
    56: "Bruine verglaçante légère",
    57: "Bruine verglaçante intense",
    61: "Pluie légère",
    63: "Pluie modérée",
    65: "Pluie intense",
    66: "Pluie verglaçante légère",
    67: "Pluie verglaçante intense",
    71: "Neige légère",
    73: "Neige modérée",
    75: "Neige intense",
    77: "Grains de neige",
    80: "Averses légères",
    81: "Averses modérées",
    82: "Averses fortes",
    85: "Averses de neige légères",
    86: "Averses de neige fortes",
    95: "Orage",
    96: "Orage avec grêle légère",
    99: "Orage avec grêle forte"
  };

  // Access the weather code from weatherData
  const code = weatherData.current.weather_code;

  console.log(code, 'weather code');
  // Return the corresponding weather description
  return weatherDescription[code] || "Code météo inconnu"; // Default message for unknown codes
};




