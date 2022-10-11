import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import Market from "../types/market";
import axiosInstance from "./axios";

type Response = {
  count: number;
  next?: any;
  previous?: any;
  results: Market[];
};

const getMarkets = async () => {
  const response = await axiosInstance.get("/markets/");

  return response.data;
};

export const useGetMarkets = (
  options?: UseQueryOptions<Response, AxiosError>
) => useQuery<Response, AxiosError>("markets", () => getMarkets(), options);
