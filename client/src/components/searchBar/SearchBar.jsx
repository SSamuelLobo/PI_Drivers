import { useEffect, useState } from 'react';



const SearchBar = ({ onSearch }) => {
   
    const [name, setName] = useState('');
      
    const handleChange = (event) => {
    const { value } = event.target;
        setName(value);
      
        // Llama a la función de búsqueda cada vez que se actualice el término de búsqueda
        onSearch(value);
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Search By Name"
            value={name}
            onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;