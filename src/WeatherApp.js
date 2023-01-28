/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import WeatherTile from './components/WeatherTile';
import Search from './components/Search';

function WeatherApp() {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [data, setData] = useState();
    const [locationInfo, setLocationInfo] = useState({
        location: "",
        imgUrl: ""
    });
    let message;

    // called on very first render - get weather data for current location
    useEffect(() => {
        console.log("Use Effect is Called!!");
        fetchWeatherData();
        // eslint-disable-next-line
    }, [latitude, longitude]);

    const fetchWeatherData = async () => {

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        }, (err) => {
            console.log(err);
            handleError(err);
        }, { enableHighAccuracy: false, maximumAge: 700_000 });

        fetchWeatherDataBasedOnLatLong(latitude, longitude);
    };

    async function fetchWeatherDataBasedOnLatLong(latitude, longitude) {
        if (latitude && longitude) {
            await fetch(`${process.env.REACT_APP_WEATHER_APP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res) {
                        setData(res);
                        fetchLocationImages(res.name);
                    } else {
                        setData([]);
                    }
                }).catch(e => console.log(e));
        } else {
            message = "Please allow location access to view the weather.";
        }
    }

    // Fetch data based on user entered location
    const fecthDataForEnteredLocation = async (userInput) => {
        if (userInput) {
            await fetch(`${process.env.REACT_APP_WEATHER_APP_API_URL_GEO}?q=${userInput}&limit=${1}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res) {
                        fetchWeatherDataBasedOnLatLong(res[0].lat, res[0].lon);
                    } else {
                        setData([]);
                    }
                })
                .catch(e => {
                    console.error(e, "API Request to fetch weather data based on location failed!");
                });
            fetchLocationImages(userInput);
        };
    }

    const fetchLocationImages = async (location) => {
        await fetch(`${process.env.REACT_APP_UNSPLASH_API_URL}?query=${location + " " + "city"}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res) {
                    const locationInfo = {
                        location: res?.name,
                        imgUrl: res.results[0]?.urls?.small
                    }
                    setLocationInfo(locationInfo);
                } else {
                    setImgUrl([]);
                }
            })
            .catch(e => {
                console.error(e, "API Request to fetch images based on location failed!");
            });
    }

    function handleError(error) {
        // Display error based on the error code.
        const { code } = error;
        switch (code) {
            case GeolocationPositionError.TIMEOUT:
                // Handle timeout.
                message = "Connection timeout."
                break;
            case GeolocationPositionError.PERMISSION_DENIED:
                // User denied the request.
                message = "Please allow location access to view the weather."
                break;
            case GeolocationPositionError.POSITION_UNAVAILABLE:
                // Position not available.
                message = "Weather for current position is not available"
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex flex-col justify-between items-center m-auto z-0 scroll-smooth">
            <div className='py-2'>
                <Search onSubmit={fecthDataForEnteredLocation} />
            </div>
            <div className='m-2'>
                {
                    data ?
                        <WeatherTile weatherData={data} {...locationInfo} /> :
                        <h1>{message}</h1>
                }
            </div>
        </div>
    )
};


export default WeatherApp;
