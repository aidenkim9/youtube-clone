import styled from "styled-components";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const RecommendedContainer = styled.div`
  flex-basis: 30%;
`;
const SideVideoList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  img {
    flex-basis: 49%; // 중첩되는 개념을 모르겠다
    width: 50%;
  }
  p {
    color: #5a5a5a;
    font-size: 14px;
  }
`;
const VideoInfo = styled.div`
  padding-top: 5px;
  flex-basis: 49%;
  h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const Recommended = () => {
  return (
    <RecommendedContainer>
      <SideVideoList>
        <img src={thumbnail1} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail2} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail3} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail4} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail5} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail6} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail7} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
      <SideVideoList>
        <img src={thumbnail8} alt="" />
        <VideoInfo>
          <h3>Best channel that help you learn web</h3>
          <p>GreatStack</p>
          <p>1432 views &bull; 2 days ago</p>
        </VideoInfo>
      </SideVideoList>
    </RecommendedContainer>
  );
};

export default Recommended;
