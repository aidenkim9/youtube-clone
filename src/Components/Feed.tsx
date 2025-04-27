import styled from "styled-components";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";

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

interface IFeedProps {
  category: number;
}

interface IVideo {
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
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: true;
    contentRating: {};
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
} // ts 다시 이해하기

interface IVideoResponse {
  kind: "youtube#videoListResponse";
  etag: "jCemnKcYs-ujfIzNobryhTiZV5U";
  items: IVideo[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

const Feed = ({ category }: IFeedProps) => {
  const [data, setData] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(data);

  const fetchData = async () => {
    try {
      const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=KR&videoCategoryId=${category}&key=${API_KEY}`;
      const videoList: IVideoResponse = await (await fetch(fetch_url)).json();
      setData(videoList.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [category]);

  return (
    <>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <FeedContainer>
          {data?.map((item, index) => {
            return (
              <Link
                key={index}
                to={`video/${item.snippet.categoryId}/${item.id}`}
              >
                <Card>
                  <Img src={item.snippet.thumbnails.medium.url} />
                  <VideoTitle>{item.snippet.title}</VideoTitle>
                  <ChannelName>{item.snippet.channelTitle}</ChannelName>
                  <VideoInfo>
                    {value_converter(+item.statistics.viewCount)} views &bull;{" "}
                    {moment(item.snippet.publishedAt).fromNow()}
                  </VideoInfo>
                </Card>
              </Link>
            );
          })}
        </FeedContainer>
      )}
    </>
  );
};

export default Feed;
