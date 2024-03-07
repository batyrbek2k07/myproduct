import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
    
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        {/* <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart  className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a> */}

        <button className="batn">
          <FiHeart className="nav-icons" />
        </button>
        <button className="batn">
          <AiOutlineShoppingCart className="nav-icons" />
        </button>
        <Link to={"/admin"}>
          <button className="batn">
            <AiOutlineUserAdd className="nav-icons" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
