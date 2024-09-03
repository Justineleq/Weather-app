import {
  // unixToLocalTime,
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
    0: {
      description: "Ciel dégagé",
      dayImage: "01d.svg",
      nightImage: "01n.svg"
    },
    1: {
      description: "Principalement clair",
      dayImage: "02d.svg",
      nightImage: "02n.svg"
    },
    2: {
      description: "Partiellement nuageux",
      dayImage: "03d.svg",
      nightImage: "images/03n.svg"
    },
    3: {
      description: "Couvert",
      dayImage: "04d.svg",
      nightImage: "04n.svg"
    },
    45: {
      description: "Brouillard",
      dayImage: "50d.svg",
      nightImage: "50n.svg"
    },
    48: {
      description: "Brouillard givrant déposé",
      dayImage: "50d.svg",
      nightImage: "50n.svg"
    },
    51: {
      description: "Bruine légère",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    53: {
      description: "Bruine modérée",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    55: {
      description: "Bruine dense intense",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    56: {
      description: "Bruine verglaçante légère",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    57: {
      description: "Bruine verglaçante intense",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    61: {
      description: "Pluie légère",
      dayImage: "10d.svg",
      nightImage: "10n.svg"
    },
    63: {
      description: "Pluie modérée",
      dayImage: "10d.svg",
      nightImage: "10n.svg"
    },
    65: {
      description: "Pluie intense",
      dayImage: "10d.svg",
      nightImage: "10n.svg"
    },
    66: {
      description: "Pluie verglaçante légère",
      dayImage: "10d.svg",
      nightImage: "10n.svg"
    },
    67: {
      description: "Pluie verglaçante intense",
      dayImage: "10d.svg",
      nightImage: "10n.svg"
    },
    71: {
      description: "Neige légère",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    73: {
      description: "Neige modérée",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    75: {
      description: "Neige intense",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    77: {
      description: "Grains de neige",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    80: {
      description: "Averses légères",
      dayImage: "09n.svg",
      nightImage: "09n.svg"
    },
    81: {
      description: "Averses modérées",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    82: {
      description: "Averses fortes",
      dayImage: "09d.svg",
      nightImage: "09n.svg"
    },
    85: {
      description: "Averses de neige légères",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    86: {
      description: "Averses de neige fortes",
      dayImage: "13d.svg",
      nightImage: "13n.svg"
    },
    95: {
      description: "Orage",
      dayImage: "11d.svg",
      nightImage: "11n.svg"
    },
    96: {
      description: "Orage avec grêle légère",
      dayImage: "11d.svg",
      nightImage: "11n.svg"
    },
    99: {
      description: "Orage avec grêle forte",
      dayImage: "11d.svg",
      nightImage: "11n.svg"
    }
  };

  // I have an undefined reading of weather_code. Typeof error....(is it because I output a number and its waiting for a string?)
  const code = weatherData.current.weather_code; 
  console.log(code,'code');
  const isDay = weatherData.current.is_day === 1; // Convert is_day to boolean

  //Takes the code and output the data in my object
  const descriptionData = weatherDescription[code];


// console.log(isDay,'is it day??');

console.log(descriptionData,'description data');

// if its day then output is day image/ vise versa. Need to check this actaully works!!
  const image = isDay ? descriptionData.dayImage : descriptionData.nightImage;
  const description = descriptionData.description

  console.log(image,'description data image');
  console.log(description,'description ');

  return {
    description: description,
    image: image
  };
};
