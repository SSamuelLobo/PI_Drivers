/*Validacion del email y el password*/
import  validate  from "./validation"

/*Importaciones de React*/
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Login = ({ login }) => {

    /*Creo un estado donde guardo el email y password del usuario temporalmente */
    const [ userData , setUserData ] = useState({
        email: "" ,
        password: ""
    })

    /*Aqui guardo el error si hay alguno a la hora de escribir*/
    const [ errors , setErrors ] = useState({})

    /*Aqui guardo un mensaje de error si el el email o el password no son los correctos*/
    const [errorMessage, setErrorMessage] = useState('');


    /*Aqui se estara añadiendo la informacion en el input*/
    const handleInPutChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })
    }


    const handleSubmit =  async (event) => {
        event.preventDefault();
        try {
            console.log(userData);
            await login(userData);
          // Limpiar errores si el login tiene éxito
          setErrors({});
          setErrorMessage('');
        } catch (error) {
          // Mostrar mensaje de error personalizado según el tipo de error
          if (error.response && error.response.status === 404) {
            setErrorMessage('Email o contraseña incorrectos');
          } else {
            setErrorMessage('Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.');
          }
        }
    };

    useEffect(() =>{
        if(userData.email !=="" || userData.password !== ""){
            const userValidated = validate(userData) //se ejecuta mientras que observa como va cambiando la funcion
            setErrors(userValidated)
        }
    }, [userData])

    return (
        <div>

            <h1>Drivers</h1>

            <form onSubmit={handleSubmit}>

                <h2>Login</h2>

                <div>

                    <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={handleInPutChange}
                    className={errors.email && "warning"}
                    autoComplete="off" 
                    />

                    <label htmlFor="email">
                        <span>Email</span> 
                    </label>
                </div>

                {errors.email && <p className="danger">{errors.email}</p>}
                        

            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />


                <div>

                    <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    value={userData.password}
                    onChange={handleInPutChange}
                    className={errors.password && "warning"}
                    />

                    <label htmlFor="password">
                        <span>Password</span>
                    </label>

                </div>

                {errors.password && <p className="danger">{errors.password}</p>}
                {errorMessage && <p className="danger">{errorMessage}</p>}
                    

            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />


            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>

            <button>
                <Link to="/register">Registro</Link>
            </button>

            </form>
            
        </div>
    )
}

export default Login;