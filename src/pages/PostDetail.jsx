import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div style={{ textAlign: 'center', padding: '50px' }}>იტვირთება...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h2>{post.title}</h2>
      <img 
        src={`https://picsum.photos/seed/${post.id}/800/400`} 
        alt="Blog Cover" 
        style={{ width: '100%', borderRadius: '12px', margin: '20px 0' }} 
      />
      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{post.body}</p>
      
      <div style={{ marginTop: '20px' }}>
        {post.tags?.map(tag => (
          <span key={tag} style={{ background: '#e0e0e0', padding: '4px 12px', borderRadius: '15px', marginRight: '8px', fontSize: '0.9rem' }}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;