import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { useEffect, useState } from "react";
import { value_converter } from "../data";
import moment from "moment";
import { IChannelData, ICommentData, IVideoData } from "../Types/youtube";
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
import {
  fetchVideoDetails,
  fetchChannelDetails,
  fetchCommentDetails,
} from "../Api/youtube";

interface IPlayVideoProps {
  videoId: string;
}
const PlayVideo = ({ videoId }: IPlayVideoProps) => {
  const [apiData, setApiData] = useState<IVideoData | null>(null);
  const [channelData, setChannelData] = useState<IChannelData | null>(null);
  const [commentData, setCommentData] = useState<ICommentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await fetchVideoDetails(videoId);

      if (!data) return;
      const [channelFetchedData, commentFetchedData] = await Promise.all([
        fetchChannelDetails(data.items[0].snippet.channelId),
        fetchCommentDetails(videoId),
      ]);
      setApiData(data.items[0]);
      if (channelFetchedData) setChannelData(channelFetchedData.items[0]);
      if (commentFetchedData) setCommentData(commentFetchedData.items);
      setLoading(false);
    };
    fetchAll();
  }, [apiData]);

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
                <Icon src={like} />
                {apiData ? value_converter(apiData.statistics.likeCount) : ""}
              </span>
              <span>
                <Icon src={dislike} />
              </span>
              <span>
                <Icon src={share} /> share
              </span>
              <span>
                <Icon src={save} /> save
              </span>
            </VideoInfoIcons>
          </VideoInfo>
          <hr />
          <Publisher>
            <img
              src={channelData ? channelData.snippet.thumbnails.medium.url : ""}
            />
            <div>
              <p>{apiData ? apiData.snippet.channelTitle : "Title here"}</p>
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
            <p>
              {apiData
                ? apiData.snippet.description.slice(0, 250)
                : "description"}
            </p>
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
                      <img src={like} />
                      <span>
                        {item.snippet.topLevelComment.snippet.likeCount}
                      </span>
                      <img src={dislike} />
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
