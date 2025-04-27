import styled from "styled-components";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

const VideoContainer = styled.div`
  flex-basis: 69%; // what is this
  iframe {
    width: 100%;
    height: 40vw; // vw, vh 차이?
  }
  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 10px 0;
  }
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

interface IPlayVideoProps {
  videoId: string;
}
interface IVideoData {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

interface IVideoDataResponse {
  kind: string;
  etag: string;
  items: IVideoData[];
}

interface IChannelData {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
}
interface IChannelDataResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultPerPage: number;
  };
  items: IChannelData[];
}
interface ICommentData {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        channelId: string;
        videoId: string;
        textDisplay: string;
        textOriginal: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        authorChannelId: {
          value: string;
        };
        canRate: boolean;
        viewerRating: string;
        likeCount: number;
        publishedAt: string;
        updatedAt: string;
      };
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}
interface ICommentDataResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ICommentData[];
}

const PlayVideo = ({ videoId }: IPlayVideoProps) => {
  const [apiData, setApiData] = useState<IVideoData | null>(null);
  const [channelData, setChannelData] = useState<IChannelData | null>(null);
  const [commentData, setCommentData] = useState<ICommentData[]>([]);

  const fetchApiData = async () => {
    // fetch video data
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const fetchData: IVideoDataResponse = await (await fetch(fetch_url)).json();
    setApiData(fetchData.items[0]);
  };

  const fetchOtherData = async () => {
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`;
    const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    const fetchChannelData: IChannelDataResponse = await (
      await fetch(channel_url)
    ).json();
    const fetchCommentsData: ICommentDataResponse = await (
      await fetch(comments_url)
    ).json();
    setChannelData(fetchChannelData.items[0]);
    setCommentData(fetchCommentsData.items);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]); // 비동기 데이터 시간차 다시 이해하기

  return (
    <VideoContainer>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <VideoTitle>{apiData ? apiData.snippet.title : ""}</VideoTitle>
      <VideoInfo>
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : ""} views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <VideoInfoIcons>
          <span>
            <Icon src={like} alt="" />{" "}
            {apiData ? value_converter(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <Icon src={dislike} alt="" />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.medium.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_converter(+channelData.statistics.subscriberCount)
              : ""}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </Publisher>
      <VideoDescription>
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : ""}</p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : ""}{" "}
          comments
        </h4>
        {commentData?.map((item, index) => {
          return (
            <Comment key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <CommentAction>
                  <img src={like} alt="" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="" />
                </CommentAction>
              </div>
            </Comment>
          );
        })}
      </VideoDescription>
    </VideoContainer>
  );
};

export default PlayVideo;
