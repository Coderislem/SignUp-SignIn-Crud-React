import Users from "../Users";
import { Link } from "react-router-dom";
import '../all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faUserPen, faUserMinus  } from '@fortawesome/free-solid-svg-icons';
const Sidebare=()=>{

    return (
        <div className="sidestyle">
          
<Link to="/Dash/users"><FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}} /> users  
</Link> 



        </div>
    )
}
export default Sidebare;