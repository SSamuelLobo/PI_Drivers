import { Link , useLocation} from "react-router-dom";



const Card = ({id, name, lastname , nationality , teams , description , image}) => {

    return(
        <div>
               <Link to={`/detail/${id}`} >
               <h2>{name}</h2>
               </Link>
               <Link to={`/detail/${id}`} >
               <h2>{lastname}</h2>
               </Link>
               <Link to={`/detail/${id}`} >
               <h2>{teams}</h2>
               </Link>
               <Link to={`/detail/${id}`} >

               <img className="card-image" src={image} alt={name} width={300} height={300} />

               </Link>
        </div>
    )
}

export default Card ;