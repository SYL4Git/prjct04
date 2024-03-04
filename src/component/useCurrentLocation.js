import { useEffect, useState } from 'react';

export const useCurrentLocation = (options = {}) => {
	// parameter 에 option 을 집어넣을수 있도록 설정
	const [location, setLocation] = useState();
	const [error, setError] = useState();

	const handleSuccess = (location) => {
		const { latitude, longitude } = location.coords;
		setLocation({ latitude, longitude });
	};
	// if = location.coords 불러오기 성공 >> const {latitude, longitude} 에 저장 >> setLocation({latitude, longitude}) 에 저장

	const handleError = () => {
		setError('Failed to read your location.');
	};
	// if = locatoin.coords 불러오기 실패 >> setError에 저장된 오류 메세지 출력

	useEffect(() => {
		if (!navigator.geolocation) {
			setError('Geolocation process failed. Unable to read your location.');
			return;
		}
		// Geolocation process 실패시 에러 메세지 출력

		navigator.geolocation.getCurrentPosition(
			handleSuccess,
			handleError,
			options
		);
	}, [options]);
	// Geolocation process 를 한번 실행.
	// option 값이 바뀔 때마다 재실행
	return { location, error };
};
