import { Link } from "react-router-dom";

const LandinPage = () =>{

    return (
        <div>
            <Link to={`/home`} >
                <button>Start</button>
            </Link>
        </div>
    )
}

export default LandinPage;