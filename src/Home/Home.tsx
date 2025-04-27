import styled from "styled-components";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import { useState } from "react";

interface IHomeProps {
  sideBar: boolean;
}

const HomeContainer = styled.div<{ sideBar: boolean }>`
  background: #f9f9f9;
  padding: 60px 2% 20px 17%;
  padding-left: ${(props) => (props.sideBar ? "" : "7%")};
`;

const Home = ({ sideBar }: IHomeProps) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar sideBar={sideBar} category={category} setCateory={setCategory} />
      <HomeContainer sideBar={sideBar}>
        <Feed category={category} />
      </HomeContainer>
    </>
  );
};

export default Home;
