import React, { useState,useEffect, useRef} from 'react';
import './App.css';
import Weather from './showWeather';
import style from './weather.module.css';

const SearchForm = () => {

    // to stop the useEffect from rendering when the app is mounted for the first time
    const initialMount = useRef(true);

    const [search, setSearch] = useState('');


    const [start, setStart] = useState(false);

    const [error, setError] = useState('');

    
    const [weatherStats, setWeatherStats] = useState([]);
    const [cityName, setCityName] = useState('');
    const [icon, setIcon] = useState('');

    const [showWeather, setShowWeather] = useState(false);
    
    useEffect(() => {
        // to stop useEffect from rendering at the mounting of the app
        if (initialMount.current) {
            initialMount.current = false;
        } else {
            if (start) {  
                fetchData();
            }
        }   
    },[start]);  


    async function fetchData() {
        if (start) {
            const APP_KEY = "c90701167db814596c5964d731e6d1fd";
            const REQUEST = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APP_KEY}`;

            const response = await fetch(REQUEST);
            console.log(response.statusText);
            if (response.statusText === "Not Found" || response.statusText === "Bad Request") {
                setError('Sorry we cannot find your city');
                setShowWeather(false);  

            } else {
                const data = await response.json();
                const forIcon = data.weather;

                const IconUrl = `http://openweathermap.org/img/w/${forIcon[0].icon}.png`;
                setIcon(IconUrl);

                console.log(forIcon[0].icon);
                setWeatherStats(data.main);
                setCityName(data.name);
                setShowWeather(true);
                setSearch('');
            }
            
          setStart(false);
        } else {
            console.log("the false condition");

        }

        
    }


    function updateSearch(event){
        event.preventDefault();
        setSearch(event.target.value);
    }

    function submitForm(event) {
        event.preventDefault();
        setStart(true)
    }

    return (
        <div>
            <div>
                <form className="search-form" onSubmit={submitForm} >
                    <input className="search-bar" type="text" onChange={updateSearch} value={search} />
                    <button type="submit" className="search-button">Serach</button>
                </form>
            </div>
            <div>
                {showWeather ?
                    (<Weather temp={weatherStats.temp} feels_like={weatherStats.feels_like}
                        pressure={weatherStats.pressure}
                        humidity={weatherStats.humidity}
                        cityName={cityName}
                        icon={icon}></Weather>)
                    : 
                    (<h1>{error}</h1>)  
               }
            </div>
        </div>
        );
}

export default SearchForm;