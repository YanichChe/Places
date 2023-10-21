import React, {useState, useEffect, useContext} from 'react';
import WeatherService from '../API/WeatherService'
import "../styles/search-page.css";
import {CoordsStoreContext} from "../stores/CoordsStore";
import {observer} from "mobx-react";

const WeatherComponent = observer((props) => {

    const [loading, setLoading] = useState(true);
    const store = useContext(CoordsStoreContext);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        WeatherService.getWeather(store.getCoords()[0], store.getCoords()[1])
            .then(response => {
                setWeather(response.data.fact);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    }, [store]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (<div>{weather.feels_like}</div>);
});
export default WeatherComponent;
