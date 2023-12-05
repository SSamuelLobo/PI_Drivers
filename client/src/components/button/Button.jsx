import { Link } from "react-router-dom"


const Button = ({ link , text }) =>{
    return(
        <Link to={link}>
            <li>
                {text}
            </li>
        </Link>
    )
}


export default Button ;