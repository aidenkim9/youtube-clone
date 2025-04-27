import SideBar from "../Components/SideBar";

interface IHomeProps {
  sideBar: boolean;
}

const Home = ({ sideBar }: IHomeProps) => {
  return (
    <>
      <SideBar sideBar={sideBar} />
    </>
  );
};

export default Home;
