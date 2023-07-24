import Post from '@/components/post/Post';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return response.json();
}

const Home = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1 className="title">Главная</h1>
      <ul className="posts">
        {posts.map((post: PostType) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.body}
            date="25.07.2023"
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
