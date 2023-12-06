import SearchBar from '../searchBar/searchBar';
import { Link } from "react-router-dom";
import Button from '../Button/button';
import "./nav.css"

/*Importaciones de React */
import React from 'react';
import { useState } from "react";

/*dependecies */
import axios from 'axios';

const Nav = () => {

    return (
        <nav className='container-nav'>
            <div className='container-nav__button'>
                <Link to={`/home`} >
                    <button>Home</button>
                </Link>

                <Link to={`/form`} >
                    <button>Create Driver</button>
                </Link>
            </div>
                
            
            <div className="container-nav__searchBar">
                <SearchBar/>
            </div>
        </nav>
    )
}

export default Nav;



// const [searchRequest, setSearchRequest] = useState(null); // Controlador de cancelación
 /*---------------------------------------------------------------------------------------------------- */
 /*Problemitas */

 /*Tratar de mejorar este codigo (cuando se borran todo la letra del input aun queda el ultimo) */


// const onSearch = async (name) => {
// try {
//   setDrivers([]);
//   if (searchRequest) {
//     // Si hay una búsqueda anterior en curso, cancelarla antes de realizar la nueva búsqueda
//     searchRequest.cancel();
//   }

//   const CancelToken = axios.CancelToken;
//   const source = CancelToken.source();
//   setSearchRequest(source);

//   const { data } = await axios.get(`http://localhost:3001/driver/name?name=${name}`, {
//     cancelToken: source.token, // Asociar el token de cancelación a la solicitud
//   });


//    // Verifica si la respuesta contiene datos válidos para mapear
//    if (Array.isArray(data)) {
//     const newDrivers = data.map((driv) => {
//       return {
//         id: driv.id,
//         name: driv.name,
//         lastname: driv.lastname,
//         nationality: driv.nationality,
//         description: driv.description || '',
//         teams: driv.teams || '',
//         imageUrl: driv.image || '',
//       };
//     });

//     setDrivers(newDrivers);
//   }else {
//     console.log('La respuesta del servidor no contiene datos válidos para mapear.');
//   }

// } catch (error) {
//   if (axios.isCancel(error)) {
//     console.log('Solicitud cancelada:', error.message);
//   } else {
//     console.error("Error al realizar la búsqueda:", error);
//   }
// }
// };