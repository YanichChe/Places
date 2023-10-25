import React from "react";
import '../styles/info-page.css'
import WeatherComponent from "../components/WeatherComponent";

const InfoPage = () => {

    const textStyles = {
        fontFamily: "Silkscreen",
        fontSize: "15vh",
        color: "white",
    };

    return (
        <div className='info'>
            <WeatherComponent/>
        </div>

    );
};

export default InfoPage;
