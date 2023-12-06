import Cards from "../cards/Cards";
import { useState , useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';



const Pages = () => {
    const [page, setPage] = useState(1);

/*----------------------------------------------------------------------------------------------------------- */
/*Estado Global*/
    const  allDrivers  = useSelector((state) => state.allDrivers);
    const driversFilter = useSelector((state) => state.driversFilter);

    const currentDrivers =  driversFilter.length > 0
      ? driversFilter
      : allDrivers;

      
    const currentDriversPaginated = Array.isArray(currentDrivers)
    ? currentDrivers.slice((page - 1) * 9, page * 9)
    : [];
  

    const isNextButtonDisabled = currentDriversPaginated.length === 0 || (page * 9) >= currentDrivers.length;


    
    const handlePageBefore = () => {
        setPage(page - 1);
    };

    const handlePageAfter = () => {
        setPage(page + 1);
    };
    

    useEffect(() => {
        // Este efecto se ejecuta cuando driversFilter cambia
        setPage(1); // Reiniciar la página a 1
    }, [driversFilter]);


    return (
        <div>
            <button onClick={handlePageBefore} disabled={page === 1}>
               Anterior
            </button>
            <span>Página {page}</span>
            <button onClick={handlePageAfter} disabled={isNextButtonDisabled}>
                Siguiente
            </button>

            <Cards drivers={currentDriversPaginated}/>
        </div>
    );
}

export default Pages;



















// // DriversList.js

// import React from 'react';
// import { connect } from 'react-redux';
// import { setPage } from './actions';

// const DriversList = ({ drivers, currentPage, driversPerPage, setPage }) => {
//   const indexOfLastDriver = currentPage * driversPerPage;
//   const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
//   const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

//   return (
//     <div>
//       {/* Mostrar la lista de drivers */}
//       {currentDrivers.map(driver => (
//         // Renderizar detalles del driver aquí
//         <div key={driver.id}>{driver.name}</div>
//       ))}

//       {/* Crear la paginación */}
//       <div>
//         <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
//           Anterior
//         </button>
//         <span>Página {currentPage}</span>
//         <button onClick={() => setPage(currentPage + 1)} disabled={indexOfLastDriver >= drivers.length}>
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   drivers: state.drivers,
//   currentPage: state.currentPage,
//   driversPerPage: state.driversPerPage,
// });

// export default connect(mapStateToProps, { setPage })(DriversList);