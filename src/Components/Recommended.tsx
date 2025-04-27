import styled from "styled-components";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import { Link } from "react-router-dom";

const RecommendedContainer = styled.div`
  flex-basis: 30%;
`;
const SideVideoList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  img {
    flex-basis: 49%; // 중첩되는 개념을 모르겠다
    width: 50%;
  }
  p {
    color: #5a5a5a;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
const VideoInfo = styled.div`
  padding-top: 5px;
  flex-basis: 49%;
  h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

interface IRecommendedProps {
  categoryId: string;
}

interface IApiData {
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

    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
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
    licensedContent: boolean;
    contentRating: {};
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

interface IApiDataResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: IApiData[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

const Recommended = ({ categoryId }: IRecommendedProps) => {
  const [apiData, setApiData] = useState<IApiData[]>([]);

  const fetchData = async () => {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=KR&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const fetchedData: IApiDataResponse = await (await fetch(fetch_url)).json();
    setApiData(fetchedData.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RecommendedContainer>
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <SideVideoList key={index}>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <VideoInfo>
                <h3>{item.snippet.title}</h3>
                <p>{item.snippet.channelTitle}</p>
                <p>
                  {value_converter(+item.statistics.viewCount)} views &bull;{" "}
                  {moment(item.snippet.publishedAt).fromNow()}
                </p>
              </VideoInfo>
            </SideVideoList>
          </Link>
        );
      })}
    </RecommendedContainer>
  );
};

export default Recommended;
