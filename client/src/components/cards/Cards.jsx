import React from 'react';
import Card from '../card/Card';
import "./cards.css"

const Cards = ({drivers}) => {
    return(
        <div className="cards-container">
            {drivers.map(({id, name, lastname , nationality , teams , description , image})=>{
                return (
                    <Card 
                    key={id}
                    id={id}
                    name={name}
                    lastname={lastname}
                    nationality={nationality}
                    teams={teams}
                    description={description}
                    image={image}
                    />
                    ) 
            })}
        </div>
    )
}

export default Cards



// const Cards = ({ drivers }) => {
//     return (
//       <div>
//         {drivers.map(({ id, name, lastname, nationality, teams, description, image }) => {
//           return (
//             <Card
//               key={id}
//               id={id}
//               name={name}
//               lastname={lastname}
//               nationality={nationality}
//               teams={teams}
//               description={description}
//               image={image}
//             />
//           );
//         })}
//       </div>
//     );
//   };
  
//   export default Cards;
  