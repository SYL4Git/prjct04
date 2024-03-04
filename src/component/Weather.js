import { useState } from 'react';
import { useCurrentLocation } from './useCurrentLocation';

function Weather() {
	const { location, error } = useCurrentLocation(positionOptions);
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState('');
	const [temp, setTemp] = usestate('');
}
