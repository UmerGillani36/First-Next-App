'use client';
import { useParams } from 'next/navigation';
const BlogPostPage = () => {
  const id = useParams();
  console.log('id', id);
  return <div>Blog post Page with filtered slug</div>;
};

export default BlogPostPage;
