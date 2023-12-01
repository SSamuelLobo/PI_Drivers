import './App.css'

import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Cards from './components/cards/Cards.jsx';
import Form from './components/form/Form.jsx';
import Detail from './components/detail/Detail.jsx';
import Nav from "./components/nav/Nav.jsx"


import { useEffect, useState } from "react";
import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

/*dependecies */
import axios from 'axios';

const  App = () => {

  /*Aqui guardo los drivers */
  /*Puede crear un estado global con este */
  const [drivers, setDrivers] = useState([]);

  const [access, setAccess] = useState(false);

  const [searchRequest, setSearchRequest] = useState(null); // Controlador de cancelación

  //Routings
  const location = useLocation();
  const navigate = useNavigate();


   //validation de acceso a la pagina
   const login = async (userData) => {
    try {
      /* Recibe la informacion del LandingPage */
      console.log(userData);
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user';
      console.log(userData);
      /*Busca en la base de datos si esa informacion se encuentra */
      const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
      console.log(data);
      /*Aqui recibo la informacion de acceso en true*/
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      throw Error({ error: 'Usuario no encontrado' });
    }
 }

 const onSearch = async (name) => {
  try {
    setDrivers([]);
    if (searchRequest) {
      // Si hay una búsqueda anterior en curso, cancelarla antes de realizar la nueva búsqueda
      searchRequest.cancel();
    }

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setSearchRequest(source);

    const { data } = await axios.get(`http://localhost:3001/driver/name?name=${name}`, {
      cancelToken: source.token, // Asociar el token de cancelación a la solicitud
    });


     // Verifica si la respuesta contiene datos válidos para mapear
     if (Array.isArray(data)) {
      const newDrivers = data.map((driv) => {
        return {
          id: driv.id,
          name: driv.name,
          lastname: driv.lastname,
          nationality: driv.nationality,
          description: driv.description || '',
          teams: driv.teams || '',
          imageUrl: driv.image || '',
        };
      });

      setDrivers(newDrivers);
    }else {
      console.log('La respuesta del servidor no contiene datos válidos para mapear.');
    }

  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Solicitud cancelada:', error.message);
    } else {
      console.error("Error al realizar la búsqueda:", error);
    }
  }
};

  return (
    <div>

      {location.pathname !== '/' && location.pathname !== '/register'&& <Nav onSearch={onSearch}/>}


      <Routes>
        <Route path="/" element={<Login login={login} />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/home"  element={<Cards drivers={drivers}/>} />
        <Route path="/form" element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>



  )
}

export default App
