import styled from "styled-components";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import { Link } from "react-router-dom";
import { IApiData, IApiDataResponse } from "../Types/youtube";

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

const Recommended = ({ categoryId }: IRecommendedProps) => {
  const [apiData, setApiData] = useState<IApiData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=KR&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const fetchedData: IApiDataResponse = await (
        await fetch(fetch_url)
      ).json();

      setApiData(fetchedData.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
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
      )}
    </>
  );
};

export default Recommended;
