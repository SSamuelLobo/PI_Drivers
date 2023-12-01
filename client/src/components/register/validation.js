



export const validateEmail = (userData)=>{
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (userData.email==="") {
      return "El email no puede estar vacío.";

    } else if (userData.email.length > 35) {
      return "El email no puede tener más de 35 caracteres.";

    } else if (!emailRegex.test(userData.email)) {
      return "No es un email valido.";
    }

  return "";
  
}



export const validatePassword = (userData)=> {
  const passwordRegex = /^.{6,10}$/;
  const passwordRegexnumber = /^(?=.*\d).{6,10}$/;

  if (!userData.password) {
      return "La contraseña no puede estar vacía.";

    } else if (!passwordRegex.test(userData.password)) {
      return "La contraseña debe tener entre 6 y 10 caracteres ";

    } else if (!passwordRegexnumber.test(userData.password)) {
      return "La contraseña debe tener al menos un número.";
    }

  return "";
}


export const validateName = (userData) => {
  const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (userData.name === "") {
      return "El nombre no puede estar vacío.";
    } else if (!nameRegex.test(userData.name)) {
      return "El nombre debe tener entre 1 y 30 caracteres y solo letras sin espacios.";
    }
 
  return "";
}



export const validatelastname = (userData) => {
    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (userData.lastname === "") {
      return "El apellido no puede estar vacío.";
    } else if (!nameRegex.test(userData.lastname)) {
      return "El apellido debe tener entre 1 y 30 caracteres y solo letras sin espacios.";
    }

    return "";
}




// const validate = ( userData ) =>{

//   const errors = {}

//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//     if (userData.email==="") {
//         errors.email = "El email no puede estar vacío.";

//       } else if (userData.email.length > 35) {
//         errors.email = "El email no puede tener más de 35 caracteres.";

//       } else if (!emailRegex.test(userData.email)) {
//         errors.email = "No es un email valido.";
//       }

//     const passwordRegex = /^.{6,10}$/;
//     const passwordRegexnumber = /^(?=.*\d).{6,10}$/;

//     if (!userData.password) {
//         errors.password =  "La contraseña no puede estar vacía.";

//       } else if (!passwordRegex.test(userData.password)) {
//         errors.password = "La contraseña debe tener entre 6 y 10 caracteres ";

//       } else if (!passwordRegexnumber.test(userData.password)) {
//         errors.password = "La contraseña debe tener al menos un número.";
//       }

//     // Validación para el nombre
//     const nameRegex = /^[a-zA-Z]{1,50}$/;
//     if (userData.name === "") {
//       errors.name = "El nombre no puede estar vacío.";
//     } else if (!nameRegex.test(userData.name)) {
//       errors.name = "El nombre debe tener entre 1 y 50 caracteres y solo letras sin espacios.";
//     }

//     // Validación para el apellido
//     if (userData.lastname === "") {
//       errors.lastname = "El apellido no puede estar vacío.";
//     } else if (!nameRegex.test(userData.lastname)) {
//       errors.lastname = "El apellido debe tener entre 1 y 50 caracteres y solo letras sin espacios.";
//     }
      
//     return errors;
// }


// module.exports = {
//   validateEmail,
//   validatePassword
// }