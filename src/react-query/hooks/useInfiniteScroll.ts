import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "./usePosts";

interface PostQuery {
  pageSize: number;
}

const useInfiniteScroll = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: pageParam,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default useInfiniteScroll;
