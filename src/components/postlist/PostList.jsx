import Post from '../post/Post';
import './postlist.css';

export default function PostList(props) {
  const sortedPosts = props.posts.sort((a, b) => b.id - a.id);
  const postItems = sortedPosts.map(post => (
    <li key={post.id}>
      <Post post={post} />
    </li>
  ));

  return (
    <section>
      <h2>Blog Posts</h2>
      <ul>{postItems}</ul>
    </section>
  );
};


