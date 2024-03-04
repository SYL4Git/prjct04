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
