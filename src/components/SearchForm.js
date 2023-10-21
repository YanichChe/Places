import React, { useState } from "react";
import PlaceList from "../components/PlacesList";
import "../styles/search-page.css";
function SearchForm() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };

    return (
        <form>
            <label>
                Введите название места:
                <input
                    className="rounded-input"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </label>
            {value !== '' && (
                <div>
                    <label>Предлагаемые варианты:</label>
                    <div className='list-container'>
                        <PlaceList location={value} />
                    </div>
                </div>
            )}
        </form>
    );
}

export default SearchForm;
