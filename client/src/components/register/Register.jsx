import  { validateEmail , validatePassword , validateName , validatelastname }  from "./validation"

// Register.jsx
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name:'',
    lastname:'',
  });


  const [ errors , setErrors ] = useState({
    email: '',
    password: '',
    name:'',
    lastname:''
  })
  const [showerrorMessage , setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/user', userData);
      if (response.status === 200) {
            // Dentro de handleRegister, después de enviar los datos con éxito:
            setUserData({
                email: '',
                password: '',
                name:'',
                lastname:''
            });
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000); // Después de 5 segundos, se ocultará el mensaje de éxito
      }
    } catch (error) {
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 5000); // Después de 5 segundos, se ocultará el mensaje de error
    }
  };

  // useEffect(() => {
  //   setUserData({
  //       email: '',
  //       password: '',
  //       name:'',
  //       lastname:'',
  //   });
  // }, []); 
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*creo que aqui esta el problema */


useEffect(() => {
    let errorEmail = '';
    let errorPassword = '';
    let errorName = '';
    let errorLastname = '';
  
    if (userData.email !== '') {
      errorEmail = validateEmail(userData);
    }
    if (userData.password !== '') {
      errorPassword = validatePassword(userData);
    }
    if (userData.name !== '') {
      errorName = validateName(userData);
    }
    if (userData.lastname !== '') {
      errorLastname = validatelastname(userData);
    }
  console.log(errors);
    setErrors({
      email: errorEmail,
      password: errorPassword,
      name: errorName,
      lastname: errorLastname,
    });
  }, [userData])


// useEffect(() => {
//     if(userData.email !=="" ){
//         // console.log(userData);
//         const errorEmail = validateEmail(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors({
//             email: errorEmail
//         })
//     } 
    
//     if (userData.password !==""){
//         // console.log(userData);
//         const errorPassword = validatePassword(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors({
//             password: errorPassword
//         })
//     }

//     if (userData.name !==""){
        
//         const errorname = validateName(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors({
//             name: errorname
//         })
//     }

//     if (userData.lastname !==""){

//         const errorlastname = validatelastname(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors({
//             lastname: errorlastname
//         })
//     }
// }, [userData]) //se va ejecutar cada vez que las dependecias cambien "userData"





//   useEffect(() =>{
//     if(userData.email !=="" || userData.password !== ""){
//         console.log(userData);
//         const userValidated = validate(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors(userValidated)
//     }
//     }, [userData]) //se va ejecutar cada vez que las dependecias cambien "userData"


    const handleFocus = (fieldName) => {
        setErrors({
          ...errors,
          [fieldName]: '',
        });
      };

      const handleBlur = (fieldName) => {
        if (!userData[fieldName]) {
          setErrors({
            ...errors,
            [fieldName]: `El campo ${fieldName} no puede estar vacío.`,
          });
        }
      };

  return (
    <div>

      <form onSubmit={handleRegister}>
        <h2>Registro de usuario</h2>

        <div>
            <input
            required
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
            className={errors.email && "warning"}
            autoComplete="off"
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
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
            type="text"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && "warning"}
            autoComplete="off"
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
            />

            <label htmlFor="password">
                <span>Password</span>
            </label>

        </div>

        {errors.password && <p className="danger">{errors.password}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />


        <div>
            <input
            required
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
            className={errors.name && "warning"}
            autoComplete="off"
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            />

            <label htmlFor="name">
                <span>Name</span>
            </label>

        </div>

        {errors.name && <p className="danger">{errors.name}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />

        <div>
            <input
            required
            type="text"
            name="lastname"
            id="lastname"
            value={userData.lastname}
            onChange={handleInputChange}
            className={errors.lastname && "warning"}
            autoComplete="off"
            onFocus={() => handleFocus('lastname')}
            onBlur={() => handleBlur('lastname')}
            />

            <label htmlFor="lastname">
                <span>Lastname</span>
            </label>

        </div>

        {errors.lastname && <p className="danger">{errors.lastname}</p>}

        <hr style={{ borderStyle: "none" }} />
        <hr style={{ borderStyle: "none" }} />


        <button type="submit" >Registrarse</button>
        <button>
            <Link to="/">Login</Link>
        </button>
      </form>
      

      {showerrorMessage && <p className="fail">Error al crear el usuario. Inténtalo de nuevo.</p>}
      {showSuccessMessage && <p className="success">Usuario creado correctamente.</p>}
    </div>
  );
};

export default Register;






































// import  validate  from "./validation"

// // Register.jsx
// import { useState , useEffect } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//     name:'',
//     lastname:'',
//   });


//   const [ errors , setErrors ] = useState({
//     email: '',
//     password: '',
//     name:'',
//     lastname:''
//   })
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');


//   const handleInputChange = (event) => {
//     setUserData({
//       ...userData,
//       [event.target.name]: event.target.value,
//     });
//   };


//   const handleRegister = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/user', userData);
//       if (response.status === 200) {
//         setSuccessMessage('Usuario creado correctamente.');
//       }
//     } catch (error) {
//       setErrorMessage('Error al crear el usuario. Inténtalo de nuevo.');
//     }
//   };


//   useEffect(() =>{
//     if(userData.email !=="" || userData.password !== ""){
//         const userValidated = validate(userData) //se ejecuta mientras que observa como va cambiando la funcion
//         setErrors(userValidated)
//     }
//     }, [userData])


//     const handleFocus = (fieldName) => {
//         setErrorMessage('');
//         setErrors({
//           ...errors,
//           [fieldName]: '',
//         });
//       };

//       const handleBlur = (fieldName) => {
//         if (!userData[fieldName]) {
//           setErrors({
//             ...errors,
//             [fieldName]: `El campo ${fieldName} no puede estar vacío.`,
//           });
//         }
//       };

//   return (
//     <div>

//       <form onSubmit={handleRegister}>
//         <h2>Registro de usuario</h2>

//         <div>
//             <input
//             required
//             type="email"
//             name="email"
//             id="email"
//             value={userData.email}
//             onChange={handleInputChange}
//             className={errors.email && "warning"}
//             autoComplete="off"
//             onFocus={() => handleFocus('email')}
//             onBlur={() => handleBlur('email')}
//             />

//             <label htmlFor="email">
//                 <span>Email</span>
//             </label>
//         </div>

//         {errors.email && <p className="danger">{errors.email}</p>}


//         <hr style={{ borderStyle: "none" }} />
//         <hr style={{ borderStyle: "none" }} />


//         <div>
//             <input
//             required
//             type="password"
//             name="password"
//             id="password"
//             value={userData.password}
//             onChange={handleInputChange}
//             className={errors.password && "warning"}
//             autoComplete="off"
//             onFocus={() => handleFocus('password')}
//             onBlur={() => handleBlur('password')}
//             />

//             <label htmlFor="password">
//                 <span>Password</span>
//             </label>

//         </div>

//         {errors.password && <p className="danger">{errors.password}</p>}

//         <hr style={{ borderStyle: "none" }} />
//         <hr style={{ borderStyle: "none" }} />


//         <div>
//             <input
//             required
//             type="text"
//             name="name"
//             id="name"
//             value={userData.name}
//             onChange={handleInputChange}
//             className={errors.name && "warning"}
//             autoComplete="off"
//             onFocus={() => handleFocus('name')}
//             onBlur={() => handleBlur('name')}
//             />

//             <label htmlFor="name">
//                 <span>Name</span>
//             </label>

//         </div>

//         {errors.name && <p className="danger">{errors.name}</p>}

//         <hr style={{ borderStyle: "none" }} />
//         <hr style={{ borderStyle: "none" }} />

//         <div>
//             <input
//             required
//             type="text"
//             name="lastname"
//             id="lastname"
//             value={userData.lastname}
//             onChange={handleInputChange}
//             className={errors.lastname && "warning"}
//             autoComplete="off"
//             onFocus={() => handleFocus('lastname')}
//             onBlur={() => handleBlur('lastname')}
//             />

//             <label htmlFor="lastname">
//                 <span>lastname</span>
//             </label>

//         </div>

//         {errors.lastname && <p className="danger">{errors.lastname}</p>}

//         <hr style={{ borderStyle: "none" }} />
//         <hr style={{ borderStyle: "none" }} />


//         <button type="submit">Registrarse</button>
//       </form>

//       {errorMessage && <p className="danger">{errorMessage}</p>}
//       {successMessage && <p className="success">{successMessage}</p>}
//     </div>
//   );
// };

// export default Register;
