import React, { useState } from "react";
import Select from 'react-select';
import c from './selectCity.module.css'



// const options = [{ value: "Биберево", label: "Биберево" }, { value: "Аризона", label: "Аризона" }, { value: "Самара", label: "Самара" },
// { value: "Пекин", label: "Пекин" }, { value: "Канберра", label: "Канберра" }]


const SelectCity = ({options}) => {

    let [city, setCity] = useState({ value: "Биберево", label: "Биберево" });

    console.log(options);

    const handleChange = (e) => {
        setCity(e);
    }

    return (
        <div className={c.wrap__select}>
            <Select value={city} onChange={handleChange} options={options}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                menuPortalTarget={document.body}
                menuPosition={'fixed'} />
        </div>
    )
}

export default SelectCity;

