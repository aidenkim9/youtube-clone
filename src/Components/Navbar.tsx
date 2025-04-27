import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/user_profile.jpg";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLeft,
  NavMiddle,
  NavRight,
  Menu,
  Logo,
  SearchBox,
  Input,
  Search,
  Profile,
} from "../Styles/NavBar.styles";

interface INavBarProps {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setSideBar }: INavBarProps) => {
  return (
    <Nav>
      <NavLeft>
        <Menu onClick={() => setSideBar((prev) => !prev)} src={menu_icon} />
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </NavLeft>
      <NavMiddle>
        <SearchBox>
          <Input type="text" placeholder="Search" />
          <Search src={search_icon} />
        </SearchBox>
      </NavMiddle>
      <NavRight>
        <img src={upload_icon} />
        <img src={more_icon} />
        <img src={notification_icon} />
        <Profile src={profile_icon} />
      </NavRight>
    </Nav>
  );
};

export default Navbar;
