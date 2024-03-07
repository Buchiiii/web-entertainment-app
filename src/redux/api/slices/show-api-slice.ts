import { apiSlice } from "../api";

interface IShow {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
const showApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrending: builder.query<IShow[], void>({
      query: () => "show/trending",
    }),
    getMovies: builder.query<IShow[], void>({
      query: () => "show/movies",
    }),
    getSeries: builder.query<IShow[], void>({
      query: () => "show/series",
    }),
    getRecommended: builder.query<IShow[], void>({
      query: () => "show/recommended",
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetRecommendedQuery,
  useGetSeriesQuery,
  useGetTrendingQuery,
} = showApi;
