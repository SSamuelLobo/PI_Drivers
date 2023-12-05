import { SET_ALL_DRIVERS , SET_DRIVERS_FILTER , SET_DRIVERS_ORDER, SET_SELECTED_SOURCE } from "./types";

const initialState = {
    allDrivers: [], // Aquí guardarás todos tus drivers
    driversFilter:[],
    selectedSource: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ALL_DRIVERS:
        return {
          ...state,
          allDrivers: action.payload,
        };
        
      case SET_DRIVERS_FILTER:
        const filterByTeam = [...state.allDrivers].filter((driver) => {
          const teamsArray = (driver.teams || '').split(',').map(team => team.trim());
          return teamsArray.includes(action.payload);
        });
        return {
          ...state,
          driversFilter: filterByTeam ,
        }

      case SET_DRIVERS_ORDER:
        const allDriversCopy = [...state.allDrivers]
        const order = ()=>{
          if(action.payload === "Asc_Birthday"){
            return allDriversCopy.sort((a, b) =>{
              const dateA = new Date(a.birthdate);
              const dateB = new Date(b.birthdate);
              return dateA - dateB;
            })

          } else if(action.payload === "Des_Birthday"){
            return allDriversCopy.sort((a, b) =>{
              const dateA = new Date(a.birthdate);
              const dateB = new Date(b.birthdate);
              return dateB - dateA;
            })

          } else if(action.payload === "A-Z"){
            return allDriversCopy.sort((a, b) =>{
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              return nameA.localeCompare(nameB);
            })

          } else if(action.payload === "Z-A"){
            return allDriversCopy.sort((a, b) =>{
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              return nameB.localeCompare(nameA);
            })
          }
        }
        return {
          ...state,
          driversFilter: order(),
      }

      case SET_SELECTED_SOURCE:
      return {
        ...state,
        selectedSource: action.payload === "From-BD", // Actualiza el estado de selectedSource
        driversFilter:[],
      };

      default:
        return state;
    }
};
  
export default reducer;