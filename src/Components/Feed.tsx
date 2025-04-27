import styled from "styled-components";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  margin-top: 15px;
`;
const Card = styled.div``;
const Img = styled.img`
  width: 100%; // 넘치던 이미지가 어떻게 화면에 맞춰지는지?
  border-radius: 3%;
`;
const VideoTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #000;
  margin: 5px 0;
`;
const ChannelName = styled.h3`
  font-size: 17px;
  color: #555;
  font-weight: 600;
  margin: 6px 0;
`;
const VideoInfo = styled.p`
  font-size: 14px;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <Link to={`video/20/124125`}>
        <Card>
          <Img src={thumbnail1} />
          <VideoTitle>
            Best channel to learn coding that help you to be a web developer.
          </VideoTitle>
          <ChannelName>Greatstack</ChannelName>
          <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
        </Card>
      </Link>
      <Card>
        <Img src={thumbnail2} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail3} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail4} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail5} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail6} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail7} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail8} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail1} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail2} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail3} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail4} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail5} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail6} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail7} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
      <Card>
        <Img src={thumbnail8} />
        <VideoTitle>
          Best channel to learn coding that help you to be a web developer.
        </VideoTitle>
        <ChannelName>Greatstack</ChannelName>
        <VideoInfo>15K views &bull; 2 days ago</VideoInfo>
      </Card>
    </FeedContainer>
  );
};

export default Feed;
