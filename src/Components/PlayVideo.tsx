import styled from "styled-components";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

const VideoContainer = styled.div`
  flex-basis: 69%; // what is this
  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 10px 0;
  }
`;
const VideoPlayer = styled.video`
  width: 100%;
`;
const VideoTitle = styled.h3`
  margin-top: 20px;
  font-weight: 600;
  font-size: 23px;
`;
const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 15px;
  color: #5a5a5a;
`;
const VideoInfoIcons = styled.div`
  span {
    display: inline-flex; // span에서 flex만 주면 세로 정렬되는 이유?
    align-items: center;
    margin-left: 15px;
  }
`;
const Publisher = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    flex: 1; // what is this
    line-height: 18px;
    p {
      font-weight: 600;
      font-size: 18px;
      color: #000;
    }
    span {
      font-size: 13px;
      color: #5a5a5a;
    }
  }
  button {
    background: red;
    color: #fff;
    outline: 0;
    border: 0;
    padding: 10px 35px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const VideoDescription = styled.div`
  padding-left: 55px;
  margin-top: 10px;
  p {
    font-size: 14px;
    margin-bottom: 5px;
    color: #5a5a5a;
  }
  h4 {
    font-size: 20px;
    color: #5a5a5a;
    margin-top: 10px;
  }
`;
const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
    span {
      font-size: 12px;
      color: #5a5a5a;
      margin-left: 5px;
      font-weight: 500;
    }
  }
`;

const CommentAction = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  img {
    width: 20px;
  }
  span {
    margin-right: 10px;
    color: #5a5a5a;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

const PlayVideo = () => {
  return (
    <VideoContainer>
      <VideoPlayer src={video1} controls autoPlay muted></VideoPlayer>
      <VideoTitle>Best YouTube Channel To Learn Web Development.</VideoTitle>
      <VideoInfo>
        <p>1525 views &bull; 2 days ago</p>
        <VideoInfoIcons>
          <span>
            <Icon src={like} alt="" /> 125
          </span>
          <span>
            <Icon src={dislike} alt="" /> 2
          </span>
          <span>
            <Icon src={share} alt="" /> share
          </span>
          <span>
            <Icon src={save} alt="" /> save
          </span>
        </VideoInfoIcons>
      </VideoInfo>
      <hr />
      <Publisher>
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </Publisher>
      <VideoDescription>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web Development</p>
        <hr />
        <h4>130 comments</h4>
        <Comment>
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              exercitationem reiciendis reprehenderit aliquid veritatis in
              dolore magnam recusandae? Eos incidunt ut adipisci quidem.
              Sapiente sint non repudiandae, molestiae repellendus iste!
            </p>
            <CommentAction>
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
            </CommentAction>
          </div>
        </Comment>
        <Comment>
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              exercitationem reiciendis reprehenderit aliquid veritatis in
              dolore magnam recusandae? Eos incidunt ut adipisci quidem.
              Sapiente sint non repudiandae, molestiae repellendus iste!
            </p>
            <CommentAction>
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
            </CommentAction>
          </div>
        </Comment>
        <Comment>
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              exercitationem reiciendis reprehenderit aliquid veritatis in
              dolore magnam recusandae? Eos incidunt ut adipisci quidem.
              Sapiente sint non repudiandae, molestiae repellendus iste!
            </p>
            <CommentAction>
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
            </CommentAction>
          </div>
        </Comment>
        <Comment>
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              exercitationem reiciendis reprehenderit aliquid veritatis in
              dolore magnam recusandae? Eos incidunt ut adipisci quidem.
              Sapiente sint non repudiandae, molestiae repellendus iste!
            </p>
            <CommentAction>
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
            </CommentAction>
          </div>
        </Comment>
        <Comment>
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              exercitationem reiciendis reprehenderit aliquid veritatis in
              dolore magnam recusandae? Eos incidunt ut adipisci quidem.
              Sapiente sint non repudiandae, molestiae repellendus iste!
            </p>
            <CommentAction>
              <img src={like} alt="" />
              <span>13</span>
              <img src={dislike} alt="" />
            </CommentAction>
          </div>
        </Comment>
      </VideoDescription>
    </VideoContainer>
  );
};

export default PlayVideo;
