import { getAllPostsThunk } from "../app/postsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Post from "./Post";
import { useEffect } from "react";

const PostList = () => {
  const posts = useAppSelector((state) => state.postsReducer.posts);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  const renderedPosts = posts.map((post) => <Post key={post.id} item={post} />);

  return <div className="postList">{renderedPosts}</div>;
};

export default PostList;
