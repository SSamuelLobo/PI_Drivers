import { Link } from "react-router-dom";
import "./landinPage.css";

const LandinPage = () =>{

    return (
        <div className="container-landingPage">
                <Link to={`/home`} >
                    <button className="container-landingPage__Button">Start</button>
                </Link>
        </div>
    )
}

export default LandinPage;