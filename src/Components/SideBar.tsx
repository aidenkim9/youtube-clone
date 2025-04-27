import styled from "styled-components";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const Img = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const P = styled.p``;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
`;
const SubscribedList = styled.div``;
const SubscribeTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #5a5a5a;
  margin: 20px 0px;
`;
const ProfileImg = styled.img`
  width: 25px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Container = styled.div<{ sideBar: boolean }>`
  background: #fff;
  width: ${(props) => (props.sideBar ? "15%" : "5%")};
  height: 100vh;
  position: fixed;
  top: 0;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 80px;
  ${P} {
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
  ${SubscribeTitle} {
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
  ${Hr} {
    display: ${(props) => (props.sideBar ? "" : "none")};
  }
`;
const ShortCutLinks = styled.div``;
const SideBarLink = styled.div<{ id?: number; category?: number }>`
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

interface ISideBarProps {
  sideBar: boolean;
  category: number;
  setCateory: React.Dispatch<React.SetStateAction<number>>;
}

const SideBar = ({ sideBar, category, setCateory }: ISideBarProps) => {
  return (
    <Container sideBar={sideBar}>
      <ShortCutLinks>
        <SideBarLink id={0} category={category} onClick={() => setCateory(0)}>
          <Img src={home} />
          <P>Home</P>
        </SideBarLink>
        <SideBarLink id={20} category={category} onClick={() => setCateory(20)}>
          <Img src={game_icon} />
          <P>Game Icon</P>
        </SideBarLink>
        <SideBarLink id={2} category={category} onClick={() => setCateory(2)}>
          <Img src={automobiles} />
          <P>Automobiles</P>
        </SideBarLink>
        <SideBarLink id={17} category={category} onClick={() => setCateory(17)}>
          <Img src={sports} />
          <P>Sports</P>
        </SideBarLink>
        <SideBarLink id={24} category={category} onClick={() => setCateory(24)}>
          <Img src={entertainment} />
          <P>Entertainment</P>
        </SideBarLink>
        <SideBarLink id={28} category={category} onClick={() => setCateory(28)}>
          <Img src={tech} />
          <P>Tech</P>
        </SideBarLink>
        <SideBarLink id={10} category={category} onClick={() => setCateory(10)}>
          <Img src={music} />
          <P>Music</P>
        </SideBarLink>
        <SideBarLink id={22} category={category} onClick={() => setCateory(22)}>
          <Img src={blogs} />
          <P>Blogs</P>
        </SideBarLink>
        <SideBarLink id={25} category={category} onClick={() => setCateory(25)}>
          <Img src={news} />
          <P>News</P>
        </SideBarLink>
      </ShortCutLinks>
      <Hr />
      <SubscribedList>
        <SubscribeTitle>Subscribed</SubscribeTitle>
        <SideBarLink>
          <ProfileImg src={jack} />
          <P>PewDiePie</P>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={simon} />
          <P>MrBeast</P>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={tom} />
          <P>Justin Bieber</P>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={megan} />
          <P>5-Minute Crafts</P>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={cameron} />
          <P>Nas Daily</P>
        </SideBarLink>
      </SubscribedList>
    </Container>
  );
};

export default SideBar;
