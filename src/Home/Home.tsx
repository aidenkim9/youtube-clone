import styled from "styled-components";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";

interface IHomeProps {
  sideBar: boolean;
}

const HomeContainer = styled.div<{ sideBar: boolean }>`
  background: #f9f9f9;
  padding: 20px 2% 20px 17%;
  padding-left: ${(props) => (props.sideBar ? "" : "7%")};
`;

const Home = ({ sideBar }: IHomeProps) => {
  return (
    <>
      <SideBar sideBar={sideBar} />
      <HomeContainer sideBar={sideBar}>
        <Feed />
      </HomeContainer>
    </>
  );
};

export default Home;
