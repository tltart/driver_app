import React, { useState } from "react";
import c from './mapAuto.module.css';
import searchIcon from '../../../assets/icons/search.svg'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";



const MapAuto = ({ setCoordinates }) => {

    const [address, setAddress] = React.useState("");
    // const [coordinates, setCoordinates] = React.useState({
    //     lat: null,
    //     lng: null
    // });

    const handleSelect = async value => {
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setAddress(value);
            setCoordinates(latLng);
        }
        catch (e){
            console.log("Не выбран оъект!");
        }
        
    };

    

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <div className={c.wrap__input}>
                            <input {...getInputProps({ placeholder: "Введите адрес..." })} />
                            <img src={searchIcon} alt="searchicon" />
                        </div>
                        <div>
                            {suggestions.map((suggestion, index) => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                    position: "absolute",
                                    display: 'flex',
                                    alignItems: 'center',
                                    top: `${(index + 1.3) * 40}px`,
                                    paddingLeft: '10px',
                                    zIndex: 1000,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: '15px',
                                };
                                return (
                                    <div className={c.drop__menu} key={suggestion.placeId} {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    )

}


export default MapAuto;