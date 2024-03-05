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
			setError('Geolocation process failed to read your location.');
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
export const positionOptions = {
	maximumAge: 0,
	// useCurrentPosition() 으로 읽어온 위치 정보를 얼마동안 (miliseconds 기준) 캐시(저장) 할지 설정
	timeout: 5000,
	// 위치정보 불러오는데 허용되는 최대 시간 (miliseconds 기준)
	// infinity로 설정된다면, 위치정보 읽기가 성공할때까지 다음 동작 실행 안함
	enableHighAccuracy: true,
	// 정밀 위치 추적 기능 설정
	// 지연 시간 및 배터리 소모량 증가
	// 켜야 그나마 조금 더 위치 정보가 정확해진다고 한다
};
