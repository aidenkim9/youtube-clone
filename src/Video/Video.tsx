import styled from "styled-components";
import PlayVideo from "../Components/PlayVideo";
import Recommended from "../Components/Recommended";

const PlayContainer = styled.div`
  background: #f9f9f9;
  padding: 20px 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Video = () => {
  return (
    <PlayContainer>
      <PlayVideo />
      <Recommended />
    </PlayContainer>
  );
};

export default Video;
