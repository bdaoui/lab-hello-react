import "./navbar.css";
import Logo from "../../images/ironhack-logo-xs.png";
import MenuTop from "../../images/menu-top-xs.png";

function Navbar(prop){
    return(
        <div id="navbar">
            <img src={Logo} alt="logo" />
            <img src={MenuTop} alt="menu" />
        </div>
    )
}

export default Navbar;