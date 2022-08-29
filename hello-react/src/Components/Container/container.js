import "./container.css";

import Navbar from "../navbar/navbar";
import Main from "../main_sectiion/main_section";

function Container(props){
   return( 
   <div id="container">
        <Navbar />
        <Main />
   </div>
   )
}

export default Container;