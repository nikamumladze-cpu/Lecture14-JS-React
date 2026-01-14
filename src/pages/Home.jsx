import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>ბოლო პოსტები</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #eee",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 80)}...</p>
            <Link
              to={`/posts/${post.id}`}
              style={{
                textDecoration: "none",
                border: "1px solid black",
                borderRadius: "4px",
                padding: "5px",
                backgroundColor: "blue",
                color: "white",
              }}>
              დაწვრილებით
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
