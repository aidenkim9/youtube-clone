import styled from "styled-components";
import { useEffect, useState } from "react";
import { value_converter } from "../data";
import moment from "moment";
import { Link } from "react-router-dom";
import { IRecommendedData } from "../Types/youtube";
import { fetchRecommendedVideos } from "../Api/youtube";

const RecommendedContainer = styled.div`
  flex-basis: 30%;
  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;
const SideVideoList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  img {
    flex-basis: 49%;
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
  const [apiData, setApiData] = useState<IRecommendedData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecommendedVideos(categoryId);
      if (!data) return;

      setApiData(data.items);
      setLoading(false);
    };
    fetchData();
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <RecommendedContainer>
          {apiData.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/video/${item.snippet.categoryId}/${item.id}`}
              >
                <SideVideoList>
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
