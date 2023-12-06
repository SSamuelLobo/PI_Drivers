/*Import from App.css */
import "./App.css";

/*Importar los archivos */
import Nav from "./components/nav/Nav"
import Form from "./components/form/Form"
import Detail from "./components/detail/Detail"
import HomePage from "./components/homePage/homePage"
import LandinPage from "./components/landingPage/LandingPage"

/*Importar las Rutas*/
import { Routes, Route , useLocation } from "react-router-dom";


const  App = () => {

  const location = useLocation();

  return (
    <div className="container-App">
      {location.pathname !== '/' && <Nav/>}

        <Routes>
          <Route path="/" element={<LandinPage/>}/>
          <Route path="/home"  element={<HomePage/>} />
          <Route path="/form" element={<Form />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
    </div>
  )
}

export default App;
