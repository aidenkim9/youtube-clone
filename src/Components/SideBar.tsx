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

const ShortCutLinks = styled.div``;
const SideBarLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: fit-content;
  flex-wrap: wrap;
  cursor: pointer;
`;
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

interface ISideBarProps {
  sideBar: boolean;
}

const SideBar = ({ sideBar }: ISideBarProps) => {
  return (
    <Container sideBar={sideBar}>
      <ShortCutLinks>
        <SideBarLink>
          <Img src={home} />
          <P>Home</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={game_icon} />
          <P>Game Icon</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={automobiles} />
          <P>Automobiles</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={sports} />
          <P>Sports</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={entertainment} />
          <P>Entertainment</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={tech} />
          <P>Tech</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={music} />
          <P>Music</P>
        </SideBarLink>
        <SideBarLink>
          <Img src={blogs} />
          <P>Blogs</P>
        </SideBarLink>
        <SideBarLink>
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
