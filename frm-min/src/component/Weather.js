import axios from "axios";
import { useEffect, useState } from "react";
import {Transkr} from "./Transkr";
import { useDebounce } from "../hooks/useDebounce.js";

const Weather = () => {
    const [city, setCity] = useState();

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            (async () => {
                const data = await getWeatherInfo(lat, lon);
                console.log(data, "바깥쪽");
            })();
        });
    }, []);
    
    let response;

    const getWeatherInfo = async (lat, lon) => {
        try{
            const apiKey = process.env.REACT_APP_API_KEY;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&&appid=${apiKey}`;
            const response = await axios.get(apiUrl);
            console.log(response, "안쪽");
            return response;
        } catch (error) {
            console.error('문제가 발생하였습니다.', error);
        }
    };

    

    // const dataid = data.id;
    // console.log(dataid,"id")

    // const fetchCity = async () => {
    //     try{
    //         if (!city){
    //             const position = await getCurrentLocation();
    //             const latitude = position.coords.latitude;
    //             const longitude = position.coords.longitude;
    //             getWeatherInfo(latitude, longitude);
    //             return;
    //         }
    //         const apiKey = process.env.REACT_APP_API_KEY;
    //         const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    //         const cityResponse = await axios.get(cityUrl);
    //         const cityData = cityResponse.data;
    //         setWeather(cityData);
    //     } catch (error) {
    //         console.error('문제가 발생하였습니다.', error);
    //     }
    // };

    useEffect(()=>{
        getCurrentLocation();
        // fetchCity();
    },[city]);

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    return(
        <div className="Weather">
            <div>
                <label>도시명: </label>
                <input
                    type="text"
                    value={city}
                    onChange={handleInput}
                    placeholder="도시 이름을 입력하세요"
                />
                <button></button>
            </div>
            <div>
            {/* <p>도시명: {data.name}</p>
            <p>날씨: {data.weather[0].main}</p>
            <p>현재온도: {parseInt(data.main.temp).toFixed(1)}°C</p>
            <p>최고온도: {parseInt(data.main.temp_max).toFixed(1)}°C</p>
            <p>체감온도: {parseInt(data.main.feels_like).toFixed(1)}°C</p>
            <p>풍속: {parseInt(data.wind.speed).toFixed(1)}m/s</p> */}
            </div>
        </div>
    );
}
export default Weather;