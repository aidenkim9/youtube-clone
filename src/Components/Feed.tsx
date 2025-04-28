import { Link } from "react-router-dom";
import { value_converter } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";
import { IFeedVideo } from "../Types/youtube";
import {
  FeedContainer,
  Card,
  Img,
  VideoTitle,
  ChannelName,
  VideoInfo,
} from "../Styles/Feed.styles";
import { fetchFeedVideos } from "../Api/youtube";

interface IFeedProps {
  category: number;
}

const Feed = ({ category }: IFeedProps) => {
  const [data, setData] = useState<IFeedVideo[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(data);

  useEffect(() => {
    const fetcSetData = async () => {
      const data = await fetchFeedVideos(category);
      if (data) {
        setData(data.items);
        setLoading(false);
      }
    };
    fetcSetData();
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
