import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";
import { IVideo } from "../Types/youtube";
import {
  FeedContainer,
  Card,
  Img,
  VideoTitle,
  ChannelName,
  VideoInfo,
} from "../Styles/Feed.styles";

interface IFeedProps {
  category: number;
}

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
