import "./homePage.css"

/*Importaciones de otros archivos*/
import Pages from "../pages/Pages"


/*Importacion de React*/
import { useState , useEffect } from "react";

/*actions from Redux*/
import { getAllDrivers , filterDrivers , orderDrivers } from "../../redux/action";
import { useDispatch } from 'react-redux';

/*Importacion de Axios*/
import axios from "axios";


const HomePage = () =>{

  const dispatch = useDispatch()
  const [teams, setTeams] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); 
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedSource, setSelectedSource] = useState("From-Api");

/*------------------------------------------------------------------------------------------------------------ */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchData(); // Llamada a la función que realiza la solicitud
    dispatch(getAllDrivers(selectedSource));
  }, [dispatch , selectedSource]);
/*------------------------------------------------------------------------------------------------------------ */

  const handleChangeFilter = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    
    dispatch(filterDrivers(selectedValue));
  };

  const handleChangeOrder = (e) => {
    const selectedValue = e.target.value;
    setSelectedOrder(selectedValue);
    dispatch(orderDrivers(selectedValue));
  };

  const handleChangeSource = (e) => {
    const selectedValue = e.target.value;
    setSelectedSource(selectedValue);
    // Realiza la carga de conductores al cambiar la fuente de datos
    dispatch(getAllDrivers(selectedValue));
  };


    return(
        <div className="container-homePage">
          <h1>Home</h1>

        <div className="container-homePage__source">
        <select  value={selectedSource} onChange={handleChangeSource}>
            <option value="From-Api">From API</option>
            <option value="From-BD">From Database</option>
          </select>
          
          <select value={selectedOrder} onChange={handleChangeOrder}>
            <option value="Asc_Birthday">Asc_Birthday</option>
            <option value="Des_Birthday">Des_Birthday</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select id="teamFilter" value={selectedOption} onChange={handleChangeFilter}>
              {teams.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
          
          <Pages/>
          {/* <Cards/> */}
        </div>
    )
}

export default HomePage; 


