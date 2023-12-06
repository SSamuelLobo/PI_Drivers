import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { validateName , validateLastname , validateNationality , validateBirthdate , validateTeamsName , validateDescription , validateImage } from './validation';
import "./form.css"


const Form = () => {
  const [driverInfo, setDriverInfo] = useState({
    name: '',
    lastname: '',
    nationality: '',
    birthdate: '',
    teamsname: [],
    description: '',
    image: '',
  });



  const [ errors , setErrors ] = useState({
    name: '',
    lastname: '',
    nationality: '',
    birthdate: '',
    teamsname: [],
    description: '',
    image: '',
  })

  const [teams, setTeams] = useState([]);
  const [showerrorMessage , setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleTeamsChange = (e) => {
    const { value } = e.target;
    setDriverInfo((prevInfo) => ({
      ...prevInfo,
      teamsname: [...prevInfo.teamsname, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
        const response = await axios.post("http://localhost:3001/drivers",driverInfo)
        if(response.status === 200){
            setDriverInfo({
                name: '',
                lastname: '',
                nationality: '',
                birthdate: '',
                teamsname: [],
                description: '',
                image: '',
              });
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        } 
    } catch (error) {
        setShowErrorMessage(true);
        setTimeout(() => {
            setShowErrorMessage(false);
        }, 5000);
    }
};


useEffect(() => {
    let errorName = '';
    let errorLastname = '';
    let errorNationality = '';
    let errorBirthdate = '';
    let errorTeamsName = [];
    let errorDescription = '';
    let errorImage = '';

    if (driverInfo.name !== '') {
        errorName = validateName(driverInfo);
    }
    if (driverInfo.lastname !== '') {
        errorLastname = validateLastname(driverInfo);
    }
    if (driverInfo.nationality !== '') {
        errorNationality = validateNationality(driverInfo);
    }
    if (driverInfo.birthdate !== '') {
        errorBirthdate = validateBirthdate(driverInfo);
    }
    if (driverInfo.teamsname.length !== 0) {
        errorTeamsName = validateTeamsName(driverInfo);
    }
    if (driverInfo.description !== '') {
        errorDescription = validateDescription(driverInfo);
    }
    if (driverInfo.image !== '') {
        errorImage = validateImage(driverInfo);
    }

    setErrors({
        name: errorName,
        lastname: errorLastname,
        nationality: errorNationality,
        birthdate: errorBirthdate,
        teamsname: errorTeamsName,
        description: errorDescription,
        image: errorImage,
    });
  }, [driverInfo])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchData(); 
  }, []);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="form-container">
      <h1>FORM PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
          type="text" 
          name="name" 
          value={driverInfo.name} 
          onChange={handleChange}
          className={errors.name && "warning"}
            autoComplete="off" 
          />
        </label>
        <br />
        {errors.name && <p className="danger">{errors.name}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />

        <label>
          Apellido:
          <input type="text" 
          name="lastname" 
          value={driverInfo.lastname} 
          onChange={handleChange}
          className={errors.lastname && "warning"}
            autoComplete="off"
          />
        </label>
        <br />
        {errors.lastname && <p className="danger">{errors.lastname}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />

        <label>
          Nacionalidad:
          <input 
          type="text" 
          name="nationality" 
          value={driverInfo.nationality} 
          onChange={handleChange} 
          className={errors.nationality && "warning"}
            autoComplete="off"
          />
        </label>
        <br />
        {errors.nationality && <p className="danger">{errors.nationality}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />
          

        <label>
          Fecha de Nacimiento:
          <input type="date" 
          name="birthdate" 
          value={driverInfo.birthdate} 
          onChange={handleChange} 
        />
        </label>
        <br />

        <hr style={{ borderStyle: "none" }} />      
        <hr style={{ borderStyle: "none" }} />  

        <label>
          Descripción:
          <textarea 
          name="description" 
          value={driverInfo.description} 
          onChange={handleChange}
          className={errors.description && "Description"}
            autoComplete="off"
          />
        </label>
        <br />

        {errors.description && <p className="danger">{errors.description}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />


        <label>
          Imagen:
          <input 
          type="text" 
          name="image" 
          value={driverInfo.image} 
          onChange={handleChange} 
          className={errors.image && "warning"}
            autoComplete="off"
          />
        </label>
        <br />

        {errors.image && <p className="danger">{errors.image}</p>}

        <hr style={{ borderStyle: "none" }} />      
        <hr style={{ borderStyle: "none" }} />  

        <label>
          Escuderías:
          <select onChange={handleTeamsChange}>
          {teams.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </label>
        <br />
        <hr style={{ borderStyle: "none" }} />      
        <hr style={{ borderStyle: "none" }} />
        <button type="submit" disabled={!isValidUrl(driverInfo.image)}>Crear Nuevo Driver</button>
      </form>

      {showerrorMessage && <p className="fail">Error al crear el usuario. Inténtalo de nuevo.</p>}
      {showSuccessMessage && <p className="success">Usuario creado correctamente.</p>}
    </div>
  );
};


export default Form;