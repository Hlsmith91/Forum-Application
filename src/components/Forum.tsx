import PostList from "./PostList";
import AddPost from "./AddPost";


const Forum = () => {

  return (
    <div>
      <h2>Main Forum </h2>
      <AddPost addPost={AddPost} />
      <PostList />
    </div>
  );
};

export default Forum;
