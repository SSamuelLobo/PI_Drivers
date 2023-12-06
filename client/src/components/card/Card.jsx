import { Link } from "react-router-dom";



const Card = ({id, name, lastname , teams , image}) => {

    return(
        <div>
               <Link to={`/detail/${id}`} >
               <h2>{name}</h2>
               </Link>
               
               <Link to={`/detail/${id}`} >
               <h2>{lastname}</h2>
               </Link>

               {/* <Link to={`/detail/${id}`} >
               <h2>{teams}</h2>
               </Link> */}


               {Array.isArray(teams) && teams.length > 0 && (
                <div>
                    <h2>Teams:</h2>
                    <ul>
                        {teams.map((team, index) => (
                            <li key={index}>
                                {team.name ? team.name : team}
                            </li>
                        ))}
                    </ul>
                </div>
                )}


               <Link to={`/detail/${id}`} >
                <img className="card-image" src={image} alt={name} width={300} height={300} />
               </Link>
        </div>
    )
}

export default Card ;