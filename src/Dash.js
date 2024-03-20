import { Outlet, Route, Routes } from "react-router-dom";
import Sidebare from "./Components/Sidebare";
import Topbare from "./Components/Topbqre";
import Users from "./Users";

const Dash=()=>{

return (
    <div className="dashpage">
        <Topbare/>
      
       <div style={{
        display: "flex",
        flexDirection: "row",
       }}>
         <Sidebare/>
         <div className="usertable">
        
              <Outlet/>
      
         </div>
    
       </div>
       
    </div>
)
}
export default Dash;