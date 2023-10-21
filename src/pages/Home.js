import React from "react";
import '../styles/figures.css'
import '../styles/home-page.css'

const Home = () => {

    const textStyles = {
        fontFamily: "Silkscreen",
        fontSize: "15vh",
        color: "white",
    };

    return (
        <div className='home'>
            <h1 style={textStyles}>Discover</h1>
            <div id="figure"></div>
            <div id="figure1"></div>
            <div id="figure2"></div>
        </div>

    );
};

export default Home;
