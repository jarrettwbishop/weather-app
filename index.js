const WEATHER_API_KEY = "fd99c7cbd31f4ad888a193545242202";

async function retreiveWeatherData() {
	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Orlando`,
		{
			mode: "cors",
		}
	);
	const data = await response.json();

	console.log(data);
}
