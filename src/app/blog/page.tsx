// src/app/blog/page.tsx

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/getposts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error('Error fetching posts:', err));
    }, []);

    return (
        <div>
            <h1>博客文章</h1>
            {posts.length > 0 ? (
                posts.map((post: { id: string; title: string }) => (
                    <div key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                ))
            ) : (
                <p>暂无文章</p>
            )}
        </div>
    );
};

export default Blog;

