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
      query: (input) => `show/trending`,
    }),
    getMovies: builder.query<IShow[], string>({
      query: (input) => `show/movies?search=${input}`,
    }),
    getSeries: builder.query<IShow[], string>({
      query: (input) => `show/series?search=${input}`,
    }),
    getRecommended: builder.query<IShow[], string>({
      query: (input) => `show/recommended?search=${input}`,
    }),
    getBookmarked: builder.query<IShow[], string>({
      query: (input) => `show/bookmark?search=${input}`,
    }),

  }),
});

export const {
  useGetMoviesQuery,
  useGetRecommendedQuery,
  useGetSeriesQuery,
  useGetTrendingQuery,
  useGetBookmarkedQuery
} = showApi;
