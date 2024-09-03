import chosenCity from "../../config";

export default async function handler(req, res) {
  // const { cityInput } = req.body;


  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${chosenCity.lat}&longitude=${chosenCity.lon}&current=is_day,temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&timezone=auto&forecast_days=1`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
