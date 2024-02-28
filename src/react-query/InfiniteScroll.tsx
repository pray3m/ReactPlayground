import React from "react";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const InfiniteScroll = () => {
  //   const [userId, setUserId] = useState<number>();
  const pageSize = 10;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteScroll({
    pageSize,
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages?.map((page, i) => (
          <React.Fragment key={i}>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={!hasNextPage || isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default InfiniteScroll;
