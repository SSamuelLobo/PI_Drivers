import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const formatDate = (rawDate) => {
  const dateObject = new Date(rawDate);
  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear();
  return `${day}-${month}-${year}`;
};

const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
      if (data.name) {
        console.log(data);
        setDriver({
          ...data,
          birthdate: formatDate(data.birthdate),
        });
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
  }, [id]);

  return (
    <div>
      <h1 className="detail-container__h1">DETAIL</h1>
      {driver && (
        <div>
          <h2>{driver.name}</h2>
          <h2>{driver.lastname}</h2>
          <h2>Birthdate: {driver.birthdate}</h2>
          <h2>Nationality: {driver.nationality}</h2>
          {/* Teams le quite el team.name*/}
          <h2>Teams:</h2>
          <ul>
            {driver.teams.map((team, index) => (
              <li key={index}>
                {team.name ? team.name : team}
            </li>
            ))}
          </ul>
          <h4>Description: {driver.description}</h4>
          <img src={driver.image} alt={driver.name} width={300} height={300} />
        </div>
      )}
    </div>
  );
};

export default Detail;








// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useState , useEffect } from "react";


// const Detail = () => {
//     const { id } = useParams();
//     const [driver, setDriver] = useState(null) 

//     useEffect(() => {
//         axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
//             console.log(data);
//            if (data.name) {
//               setDriver(data);
//            } else {
//               window.alert('No hay personajes con ese ID');
//            }
//         });
        
//       }, [id]);
      
//       return (
//         <div>
//             <h1 className="detail-container__h1">DETAIL</h1>
//             {driver && (  
//                 <div>

//                     <h2>{driver.name}</h2>
//                     <h2>{driver.lastname}</h2>
//                     <h2>Birthdate: {driver.birthdate}</h2>
//                     <h2>Nationality: {driver.nationality}</h2>
// /*----------------------------------------------------------------------------------------------------------- */                  
//                     {/* <h2>Teams: {driver.teams}</h2>  */}
//                     <h2>Teams:</h2>
//                         <ul>
//                             {driver.teams.map((team, index) => (
//                             <li key={index}>{team.name}</li>
//                             ))}
//                         </ul> 
// /*----------------------------------------------------------------------------------------------------------- */                  

//                     <h4>Description: {driver.description}</h4>
//                     <img src={driver.image} alt={driver.name} width={300} height={300}/>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Detail;