import Logo from "../img/logo.png";
import { CiMenuFries } from "react-icons/ci";
import "./Nav.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav>
                <Link to={"/"} className="nav-holder-1">
                    <img src={Logo} alt="logo" />
                    <span>MovieBox</span>
                </Link>

                <div className="nav-holder-2">
                    <BiSearch className="icon" />
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="What Do You Want To Watch?"
                    />
                </div>

                <div className="nav-holder-3">
                    <span>SignIn</span>
                    <div className="second">
                        <CiMenuFries />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
