import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getAllDrivers ,  getDriversByName } from "../../redux/action";

const SearchBar = () => {
   
    const [name, setName] = useState('');

    const dispatch = useDispatch();
      
    const handleChange = async (event) => {
    const { value } = event.target;
        setName(value);
        if (value.trim() === '') {
            // Si el valor del input está vacío, obtén todos los conductores
            await dispatch(getAllDrivers("From-Api"));
          } else {
            // Si hay un valor en el input, busca conductores por nombre
            await dispatch(getDriversByName(value,dispatch));
          }
    };

    const handleClear = () => {
        // Limpiar el contenido del input y obtener todos los conductores
        setName('');
        dispatch(getAllDrivers('From-Api'));
      };

    return (
        <div>
            <input
            type="text"
            placeholder="Search By Name"
            value={name}
            onChange={handleChange}
            />
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default SearchBar;