import axios from "axios";
function Home({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
}
