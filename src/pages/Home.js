import { useEffect, useState } from 'react';
import {
	useCurrentLocation,
	positionOptions,
} from '../component/useCurrentLocation';
import { API } from '../component/API';
// import { Header } from '../styled/Header';

const Home = () => {
	const { location, error } = useCurrentLocation(positionOptions);
	// useCurrentLocation 불러오기

	const apiKey = API;

	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState('');
	const [weatherIcon, setWeatherIcon] = useState('');
	const [temp, setTemp] = useState('');
	// const [road, setRoad] = useState('');

	useEffect(() => {
		if (error) {
			return console.log('Failed to read coordinates.');
			// Geolocation 작동 실패시 'error' 메세지 출력
		}
		if (location) {
			const axios = require('axios');
			axios
				.get(
					`http://api.openweathermap.org/geo/1.0/reverse?lat=${
						location.latitude
					}&lon=${location.longitude}&limit=${1}&appid=${apiKey}&lang=kr`
				)
				// reversegeocoding api 접속하고, 경도, 위도 불러오기
				// * 언어: 한국어
				.then((locationResponse) => {
					console.log(locationResponse);
					const locationData = locationResponse.data[1];
					// locationData 변수에 api 의 첫번째 배열을 지정
					console.log(locationData);
					setCountry(locationData.country);
					setCity(locationData.name);
					// locationData 안에 있는 국가, 도시 이름 불러오기
				});

			return (
				axios
					.get(
						`https://api.openweathermap.org/data/3.0/onecall?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric&lang=kr`
					)
					// onecall api 에 access 한 뒤, latitude(위도), longitude(경도) 읽어오기
					// * 단위는 미터법 = units=metric
					// * 언어: 한국어
					.then((weatherResponse) => {
						console.log(weatherResponse);
						setWeather(weatherResponse.current.weather.main);
						// 현재 날씨 요약
						setWeatherIcon(weatherResponse.current.weather.icon);
						// 현재 날씨 아이콘
						setTemp(`${weatherResponse.current.temp} ℃`);
						// 현재 온도
					})

				// .catch(() => {
				// 	alert('Failed to call API.');
				// })
			);
		}
	}, [error, location]);

	return (
		<div className="Home">
			<h1>Weather</h1>
			<p>{country}</p>
			<p>{city}</p>
			<p>{weather}</p>
			<p>{weatherIcon}</p>
			<p>{temp}</p>
		</div>
	);
};
export default Home;
