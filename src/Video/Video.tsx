import styled from "styled-components";
import PlayVideo from "../Components/PlayVideo";
import Recommended from "../Components/Recommended";
import { useParams } from "react-router-dom";

const PlayContainer = styled.div`
  background: #f9f9f9;
  padding: 80px 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Video = () => {
  const { categoryId, videoId } = useParams();

  return (
    <PlayContainer>
      <PlayVideo videoId={videoId || ""} />
      <Recommended categoryId={categoryId || ""} />
    </PlayContainer>
  );
};

export default Video;
