import SearchForm from "../components/SearchForm"
import MapComponent from "../components/MapComponent"
import "../styles/search-page.css"
import WeatherComponent from "../components/WeatherComponent";

const SearchPage = () => {
    return (
        <div className='container_'>
            <div className="block1"><SearchForm/></div>
            <div className="block2">
                <MapComponent/><WeatherComponent/>
            </div>
        </div>
    );
};
export default SearchPage;
