import SearchForm from "../components/SearchForm"
import MapComponent from "../components/MapComponent"
import "../styles/search-page.css"


const SearchPage = () => {
    return (
        <div className='container_'>
            <div className="block1"><SearchForm/></div>
            <div className="block2"><MapComponent/></div>
        </div>
    );
};
export default SearchPage;
