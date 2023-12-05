import React from 'react';
import Card from '../card/Card';


const Cards = ({drivers}) => {
    return(
        <div>
            <h1>Qlq soy el Home</h1>
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