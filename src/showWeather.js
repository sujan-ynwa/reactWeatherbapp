import React from 'react';
import style from './weather.module.css'

const Weather = ({ temp, pressure, feels_like, humidity, cityName, icon }) => {
    return (
        <div className={style.container}>
            <div>
                <img src={icon} alt="Icons" />
            </div>

             <div>
                <h1>{cityName} </h1>
                <h2>Temperatue: {temp}  &#176;c</h2>
                <h2>Feels like: {feels_like}</h2>
                <h2>Pressure: {pressure}</h2>
                <h2>Humidity: {humidity}</h2>
            </div>
            
        </div>
    );
}
export default Weather ;