import {YMaps, Map, Clusterer} from '@pbe/react-yandex-maps';
import "../styles/search-page.css"
import {useContext} from "react";
import {CoordsStoreContext} from "../stores/CoordsStore";
import {observer} from "mobx-react";
import WeatherComponent from "./WeatherComponent";

const mapState = {center: [55.630527, 37.849046], zoom: 10, controls: []};

const MapComponent1 = observer(() => {

    const store = useContext(CoordsStoreContext);

    return (
        <YMaps>
            <Map margin-left='auto' margin-right='auto' width='90%' height='90%'
                 state={{center: store.getCoords(), zoom: 10, controls: []}}
                 defaultState={mapState}>
                <Clusterer
                    options={{
                        preset: "islands#invertedVioletClusterIcons",
                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    }}
                >
                </Clusterer>
            </Map>
        </YMaps>
    );
});

export default MapComponent1;