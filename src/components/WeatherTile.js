import React from 'react';
import { WiHumidity, WiCelsius, WiThermometerExterior, WiStrongWind, WiThermometer } from "react-icons/wi";

function WeatherTile({ weatherData, imgUrl }) {

    const kelvinToCelsius = (kelvin) => {
        return Math.round((kelvin) - 273.15);
    };

    const getFormattedCurrentDate = () => {
        return new Date().toLocaleDateString('en-GB', {
            month: '2-digit', day: '2-digit', year: 'numeric'
        });
    }

    return (
        <div>
            <div className="flex justify-center items-center flex-col p-3">
                <div className="rounded-xl shadow-xl bg-slate-600 max-w-xl flex flex-col items-center p-3 text-stone-20
                    cursor-pointer hover:bg-header-primary hover:scale-105 transition transform duration-200 ease-in-out">
                    <div className='relative w-96 h-56 m-1'>
                        <img className="w-full h-full object-cover rounded-lg" alt='img-location' src={imgUrl} />
                        <span className="absolute top-24 w-full text-center tracking-wider text-5xl font-mono cursor-pointer drop-shadow-lg text-stone-100">
                            {weatherData?.name}
                        </span>
                    </div>
                    <h3 className="text-md font-mono text-slate-100 my-1">
                        {getFormattedCurrentDate()}
                    </h3>
                    <img className="rounded-t-md justify-center animate-bounce ease-out transition-3000 pt-2 mb-0"
                        src={`${process.env.REACT_APP_WEATHER_APP_ICON_URL}/${weatherData?.weather[0]?.icon}@2x.png`} alt="" />
                    <div className="px-6 flex flex-col justify-center items-center text-sm 0 font-mono text-stone-200">
                        <h2 className='text-2xl mb-1 text-stone-200 font-semibold animate-pulse ease-in-out'>
                            {weatherData?.weather[0]?.main} -<span className='hidden md:inline-block'>&nbsp;{weatherData?.weather[0]?.description}</span>
                        </h2>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='hidden md:inline-flex'>Temp</span>  <WiThermometer size={20} /> :
                            <span className='text-lg font-semibold'>&nbsp;{kelvinToCelsius(weatherData?.main?.temp)} </span>
                            <WiCelsius size={25} />
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='hidden md:inline-flex'>Feels like</span>  <WiThermometerExterior size={20} /> :
                            <span className='text-lg font-semibold'>&nbsp;{kelvinToCelsius(weatherData?.main?.feels_like)}</span>
                            <WiCelsius size={25} />
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='hidden md:inline-flex'>Wind Speed</span>  <WiStrongWind size={20} /> :
                            <span className='text-lg font-semibold'>&nbsp;{weatherData?.wind?.speed} mts/sec</span>
                            <div className='border-solid'></div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='hidden md:inline-flex'>Humidity</span> <WiHumidity size={20} /> :
                            <span className='text-lg font-semibold'>&nbsp;{weatherData?.main?.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherTile;
