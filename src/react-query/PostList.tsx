import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  //   const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        value={userId}
        onChange={(e) => setUserId(parseInt(e.target.value))}
      >
        <option value="">All users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        // disabled={page === 1}
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
