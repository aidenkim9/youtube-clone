import styled from "styled-components";

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  margin-top: 15px;
`;
export const Card = styled.div``;
export const Img = styled.img`
  width: 100%;
  border-radius: 3%;
`;
export const VideoTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #000;
  margin: 5px 0;
`;
export const ChannelName = styled.h3`
  font-size: 17px;
  color: #555;
  font-weight: 600;
  margin: 6px 0;
`;
export const VideoInfo = styled.p`
  font-size: 14px;
`;
