import React, {useState, useEffect, useContext} from 'react';
import PlaceService from '../API/PlaceService'
import "../styles/search-page.css";
import {CoordsStoreContext} from "../stores/CoordsStore";
import {observer} from "mobx-react";

const PlaceList = observer((props) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const store = useContext(CoordsStoreContext);

    useEffect(() => {
        PlaceService.GetListLocations(props.location, 50)
            .then(response => {
                setItems(response.data.hits);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    }, [props.location]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    const handleClick = (e, lat, lng) => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        store.setCoords(lat, lng);
        console.log("! ", lat, lng);
    };

    return (<div>
        <ul className="list-group">
            {items.map((item, index) => (
                <li onClick={(e) => handleClick(e, item.point.lat, item.point.lng)} key={index}
                    className="list-group-item list-group-item-action flex-column align-items-start">
                        <span>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{item.name}</h5>
                        </div>
                        <p className="mb-1">
                            {item.city ? `${item.country}, ${item.city}` : item.country}
                        </p>
                        <small> {item.housenumber ? `${item.street}, ${item.housenumber}` : item.street}</small>
                            </span>
                </li>))}
        </ul>
    </div>);
});
export default PlaceList;
