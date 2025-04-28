import styled from "styled-components";

export const Nav = styled.nav`
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  width: 100%;
  position: fixed;
`;
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const NavMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 25px;
    margin-right: 20px;
  }
`;
export const Menu = styled.img`
  width: 22px;
  margin-right: 25px;
`;
export const Logo = styled.img`
  width: 130px;
`;
export const SearchBox = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 25px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 400px;
  background: transparent;
`;
export const Search = styled.img`
  width: 15px;
`;

export const Profile = styled.img`
  width: 35px;
  border-radius: 50%;
`;
