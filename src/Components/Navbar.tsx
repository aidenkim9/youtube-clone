import styled from "styled-components";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/user_profile.jpg";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  width: 100%;
  position: fixed; // 무슨 속성?
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.img`
  width: 22px;
  margin-right: 25px;
`;
const Logo = styled.img`
  width: 130px;
`;
const SearchBox = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 25px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 400px;
  background: transparent;
`;
const Search = styled.img`
  width: 15px;
`;
const Upload = styled.img`
  width: 25px;
  margin-right: 25px;
`;
const More = styled.img`
  width: 25px;
  margin-right: 25px;
`;
const Notification = styled.img`
  width: 25px;
  margin-right: 25px;
`;
const Profile = styled.img`
  width: 35px;
  border-radius: 50%;
`;

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
        <Upload src={upload_icon} />
        <More src={more_icon} />
        <Notification src={notification_icon} />
        <Profile src={profile_icon} />
      </NavRight>
    </Nav>
  );
};

export default Navbar;
