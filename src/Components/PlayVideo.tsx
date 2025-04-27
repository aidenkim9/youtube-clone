import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import {
  IChannelData,
  IChannelDataResponse,
  ICommentData,
  ICommentDataResponse,
  IVideoData,
  IVideoDataResponse,
} from "../Types/youtube";
import {
  VideoContainer,
  VideoTitle,
  VideoInfo,
  VideoInfoIcons,
  Icon,
  Publisher,
  VideoDescription,
  Comment,
  CommentAction,
} from "../Styles/PlayVideo.styles";

interface IPlayVideoProps {
  videoId: string;
}
const PlayVideo = ({ videoId }: IPlayVideoProps) => {
  const [apiData, setApiData] = useState<IVideoData | null>(null);
  const [channelData, setChannelData] = useState<IChannelData | null>(null);
  const [commentData, setCommentData] = useState<ICommentData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApiData = async () => {
    // fetch video data
    try {
      const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const fetchData: IVideoDataResponse = await (
        await fetch(fetch_url)
      ).json();

      setApiData(fetchData.items[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOtherData = async () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiData();
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]); // 비동기 데이터 시간차 다시 이해하기

  return (
    <>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
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
              {apiData ? value_converter(apiData.statistics.viewCount) : ""}{" "}
              views &bull;{" "}
              {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
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
                    src={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
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
                      <span>
                        {item.snippet.topLevelComment.snippet.likeCount}
                      </span>
                      <img src={dislike} alt="" />
                    </CommentAction>
                  </div>
                </Comment>
              );
            })}
          </VideoDescription>
        </VideoContainer>
      )}
    </>
  );
};

export default PlayVideo;
