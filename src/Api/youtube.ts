import { API_KEY } from "../data";
import {
  IChannelDataResponse,
  ICommentDataResponse,
  IVideoDataResponse,
  IFeedVideoResponse,
  IRecommendedDataResponse,
} from "../Types/youtube";

//Feed.tsx
export const fetchFeedVideos = async (
  category: number
): Promise<IFeedVideoResponse | undefined> => {
  try {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=KR&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(fetch_url);
    const result: IFeedVideoResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

//PlayVideo.tsx
export const fetchVideoDetails = async (
  videoId: string
): Promise<IVideoDataResponse | undefined> => {
  try {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(fetch_url);
    const result: IVideoDataResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const fetchChannelDetails = async (
  channelId: string
): Promise<IChannelDataResponse | undefined> => {
  try {
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
    const response = await fetch(channel_url);
    const result: IChannelDataResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const fetchCommentDetails = async (
  videoId: string
): Promise<ICommentDataResponse | undefined> => {
  try {
    const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    const response = await fetch(comments_url);
    const result: ICommentDataResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

//Recommended.tsx
export const fetchRecommendedVideos = async (
  categoryId: string
): Promise<IRecommendedDataResponse | undefined> => {
  try {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=KR&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const response = await fetch(fetch_url);
    const result: IRecommendedDataResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
