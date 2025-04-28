import styled from "styled-components";

export const VideoContainer = styled.div`
  flex-basis: 69%;
  iframe {
    width: 100%;
    height: 40vw;
  }
  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 10px 0;
  }
`;

export const VideoTitle = styled.h3`
  margin-top: 20px;
  font-weight: 600;
  font-size: 23px;
`;
export const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 15px;
  color: #5a5a5a;
`;
export const VideoInfoIcons = styled.div`
  span {
    display: inline-flex;
    align-items: center;
    margin-left: 15px;
  }
`;
export const Publisher = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    flex: 1;
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
export const VideoDescription = styled.div`
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
export const Comment = styled.div`
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

export const CommentAction = styled.div`
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
export const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
`;
