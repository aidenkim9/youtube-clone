import styled from "styled-components";

export const Img = styled.img`
  width: 20px;
  margin-right: 20px;
`;
export const SubscribedList = styled.div``;
export const SubscribeTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #5a5a5a;
  margin: 20px 0px;
`;
export const ProfileImg = styled.img`
  width: 25px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const ShortCutLinks = styled.div``;
export const SideBarLink = styled.div<{ id?: number; category?: number }>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: fit-content;
  flex-wrap: wrap;
  cursor: pointer;
  ${Img} {
    padding-bottom: ${(props) => (props.id === props.category ? "2px" : "")};
    border-bottom: ${(props) =>
      props.id === props.category ? "3px solid red" : ""};
  }
`;
export const Container = styled.div<{ sideBar: boolean }>`
  background: #fff;
  width: ${(props) => (props.sideBar ? "15%" : "5%")};
  height: 100vh;
  position: fixed;
  top: 0;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 80px;
  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
  p {
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
  ${SubscribeTitle} {
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
