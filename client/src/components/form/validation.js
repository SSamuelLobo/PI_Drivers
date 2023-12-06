



export const validateName = (driverInfo) => {
    const { name } = driverInfo;
    let error = "";
  
    if (!name.trim()) {
      error = "El nombre no puede estar en blanco.";
    } else if (name.length > 30) {
      error = "El nombre no puede tener más de 30 caracteres.";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      error = "El nombre solo puede contener letras y no puede tener espacios.";
    }
    return error;
  };
   
  
  
  export const validateLastname = (driverInfo) => {
    const { lastname } = driverInfo;
    let error = "";
  
    if (!lastname.trim()) {
      error = "El apellido no puede estar en blanco.";
    } else if (lastname.length > 30) {
      error = "El apellido no puede tener más de 30 caracteres.";
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
      error = "El apellido solo puede contener letras y no puede tener espacios.";
    }
  
    return error;
  };
  


  export const validateNationality = (driverInfo) => {
    const { nationality } = driverInfo;
    let error = "";
  
    if (!nationality.trim()) {
      error = "La nacionalidad no puede estar en blanco.";
    } else if (nationality.length > 30) {
      error = "La nacionalidad no puede tener más de 30 caracteres.";
    } else if (!/^[a-zA-Z\s]+$/.test(nationality)) {
      error = "La nacionalidad solo puede contener letras.";
    }
  
    return error;
};
  
  
  
  
  
  export const validateBirthdate = (driverInfo) => {

  
      return "";
 }


  export const validateTeamsName= (driverInfo) => {
    

    return "";
}


export const validateDescription = (driverInfo) => {
    const { description } = driverInfo;
    let error = "";
  
    if (description.length > 200) {
      error = "La descripción no puede tener más de 200 palabras.";
    } else if (!/^[a-zA-Z\s]+$/.test(description)) {
      error = "La descripción solo puede contener letras y espacios.";
    }
  
    return error;
  };
  


  export const validateImage = (driverInfo) => {
    const { image } = driverInfo;
    let error = "";
  
    if (!isValidUrl(image)) {
      error = "La URL de la imagen no es válida.";
    }
  
    return error;
  };
  
  // Función auxiliar para validar una URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  