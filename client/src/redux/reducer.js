import { SET_ALL_DRIVERS , SET_DRIVERS_FILTER , SET_DRIVERS_ORDER, SET_SELECTED_SOURCE , SET_DRIVERS_BY_NAME } from "./types";

const initialState = {
    allDrivers: [], 
    driversFilter:[],
    selectedSource: false,
    driverByName: [],
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
          return (driver.teams || []).includes(action.payload);
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

      case SET_DRIVERS_BY_NAME:
      return {
        ...state,
        allDrivers: action.payload,
        driversFilter:[],
      };

      default:
        return state;
    }
};
  
export default reducer;