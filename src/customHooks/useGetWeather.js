import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

// Environment Variables
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
	const [isLoading, setIsLoading] = useState(false);
	//const [location, setLocation] = useState(null);		// NOT: location'ı default almamak için "latitude" ve "longitude" state'lerini oluşturup API call'dan user'a ait location'ı çektik
	const [isError, setIsError] = useState(null);
	const [weather, setWeather] = useState([]);
	const [latitude, setLatitude] = useState([]);
	const [longitude, setLongitude] = useState([]);

	const fetchWeatherData = async () => {
		try {
			const res = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
			);
			const data = await res.json();
			console.log('Data: \n', data);
			setWeather(data);
		} catch (isError) {
			setIsError('Could not fetch the weather data!!!');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();

			if (status !== 'granted') {
				setIsError('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			//setLocation(location);	// NOT: Default location'ı alır. Spesifik kendi location'ımızı alabilmek için "latitude" ve "longitude" state'lerini oluşturduk
			setLatitude(location.coords.latitude);
			setLongitude(location.coords.longitude);
			await fetchWeatherData();
		})();
	}, [latitude, longitude]);
	return [isLoading, true, []];
};

/*
  Böyle bir custom hook kullanarak app.js'de karmaşık ve uzun bir yapının gözükmemesini sağlamış oluruz
*/
