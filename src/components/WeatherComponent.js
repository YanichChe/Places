import React, {useState, useEffect, useContext} from 'react';
import WeatherService from '../API/WeatherService';
import "../styles/search-page.css";
import {CoordsStoreContext} from "../stores/CoordsStore";
import {observer} from "mobx-react";

const WeatherComponent = observer((props) => {
    const [loading, setLoading] = useState(true);
    const store = useContext(CoordsStoreContext);
    const [weather, setWeather] = useState([]);

    // Функция, которая будет вызываться при изменении store.getCoords()
    const fetchWeather = () => {
        WeatherService.getWeather(store.getCoords()[0], store.getCoords()[1])
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWeather();
    }, [store.getCoords()[0]]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (
        <div className='main'>
        <div className="top">
            <p className="header">{weather.location.name}
                <img className='img'
                    src={weather.current.condition.icon}
                    alt="Погодная иконка"
                />
            </p>
        </div>
        <div className="flex">
            <p className="day">{weather.location.localtime}</p>
            <p className="description">{weather.current.condition.text}</p>
        </div>

        <div className="flex">
            <p className="temp">Температура: {weather.current.temp_c}</p>
            <p className="temp">Видимость: {weather.current.humidity}</p>
        </div>
    </div>);
});

export default WeatherComponent;
