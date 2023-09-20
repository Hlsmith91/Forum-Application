import React from "react";
import { IPost, deletePost } from "../app/postsSlice";
import { useAppDispatch } from "../app/hooks";
import { Button } from "react-bootstrap";

interface IPostProps {
  item: IPost;
}

const Post: React.FC<IPostProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="post">
        <h4>{item.title}</h4>
        <div>{item.body}</div>
        <div>
          <Button
            variant="secondary"
            className="bi bi-trash"
            onClick={() => {
              dispatch(() => {
                if (item.id !== undefined) {
                  deletePost(item.id);
                }
              });
            }}
          >
            {" "}
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default Post;
