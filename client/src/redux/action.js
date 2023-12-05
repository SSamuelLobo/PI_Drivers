// acciones.js
import axios from "axios";
import { SET_ALL_DRIVERS , SET_DRIVERS_FILTER ,  SET_DRIVERS_ORDER , SET_SELECTED_SOURCE } from "./types";

const endpointApi = 'http://localhost:3001/drivers';
const endpointDb = 'http://localhost:3001/driversFromBD';

export const getAllDrivers = (source) => {

  const endpoint = source === "From-Api" ? endpointApi : endpointDb;

  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const allDrivers = response.data;
      dispatch({ type: SET_ALL_DRIVERS, payload: allDrivers });
      dispatch({ type: SET_SELECTED_SOURCE, payload: source });
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };
};

export const filterDrivers = (team) =>{
  return { type: SET_DRIVERS_FILTER , payload: team }
}

export const orderDrivers = (order) => {
  return { type: SET_DRIVERS_ORDER , payload: order }
}
















// import { SET_ALL_DRIVERS } from "./types"

// import axios from "axios";
// const endpoint = 'http://localhost:3001/drivers';

// export const getAllDrivers = async ()=>{
//     return async (dispatch)=> {
//         try {
//           const response = await axios.get("http://localhost:3001/drivers");
//           const allDrivers = response.data;
//           console.log(allDrivers);
//           dispatch({ type: SET_ALL_DRIVERS, payload: allDrivers });
//         } catch (error) {
//             console.error("Error fetching drivers:", error);
//           }
//     }
// }














// import { SEARCH_DRIVERS, FILTER_TEAMS, ORDER_DIVERS } from '../types';


// export const setPage = (page) => {
//     return {
//       type: 'SET_PAGE',
//       payload: page,
//     };
//   };

// // Acción para buscar conductores
// export const searchDrivers = (name) => ({
//     type: SEARCH_DRIVERS,
//     payload: name,
//   });

// export const filterTeams = (team) => ({
//     type: FILTER_TEAMS,
//     payload: name,
// });

// export const orderDrivers = (order) => ({
//     type: ORDER_DIVERS,
//     payload: name,
// });
  
