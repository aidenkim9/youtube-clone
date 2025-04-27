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
import {
  Container,
  ShortCutLinks,
  SideBarLink,
  Img,
  SubscribedList,
  SubscribeTitle,
  ProfileImg,
} from "../Styles/SideBar.styles";

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
          <p>Home</p>
        </SideBarLink>
        <SideBarLink id={20} category={category} onClick={() => setCateory(20)}>
          <Img src={game_icon} />
          <p>Game Icon</p>
        </SideBarLink>
        <SideBarLink id={2} category={category} onClick={() => setCateory(2)}>
          <Img src={automobiles} />
          <p>Automobiles</p>
        </SideBarLink>
        <SideBarLink id={17} category={category} onClick={() => setCateory(17)}>
          <Img src={sports} />
          <p>Sports</p>
        </SideBarLink>
        <SideBarLink id={24} category={category} onClick={() => setCateory(24)}>
          <Img src={entertainment} />
          <p>Entertainment</p>
        </SideBarLink>
        <SideBarLink id={28} category={category} onClick={() => setCateory(28)}>
          <Img src={tech} />
          <p>Tech</p>
        </SideBarLink>
        <SideBarLink id={10} category={category} onClick={() => setCateory(10)}>
          <Img src={music} />
          <p>Music</p>
        </SideBarLink>
        <SideBarLink id={22} category={category} onClick={() => setCateory(22)}>
          <Img src={blogs} />
          <p>Blogs</p>
        </SideBarLink>
        <SideBarLink id={25} category={category} onClick={() => setCateory(25)}>
          <Img src={news} />
          <p>News</p>
        </SideBarLink>
      </ShortCutLinks>
      <hr />
      <SubscribedList>
        <SubscribeTitle>Subscribed</SubscribeTitle>
        <SideBarLink>
          <ProfileImg src={jack} />
          <p>PewDiePie</p>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={simon} />
          <p>MrBeast</p>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={tom} />
          <p>Justin Bieber</p>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={megan} />
          <p>5-Minute Crafts</p>
        </SideBarLink>
        <SideBarLink>
          <ProfileImg src={cameron} />
          <p>Nas Daily</p>
        </SideBarLink>
      </SubscribedList>
    </Container>
  );
};

export default SideBar;
