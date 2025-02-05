import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 获取 JSON 数据文件路径
const postsFilePath = path.join(process.cwd(), 'src/data/posts.json');
// 博客文章存放目录
const blogDir = path.join(process.cwd(), 'src/app/blog');

// ✅ 处理 POST 请求：保存文章
export async function POST(req: Request) {
    try {
        const { title, markdown } = await req.json();
        console.log('Sending request with data:', { title, markdown });

        if (!title || !markdown) {
            return NextResponse.json({ error: '标题和内容不能为空' }, { status: 400 });
        }

        // 读取现有数据
        const existingData = fs.existsSync(postsFilePath) ? JSON.parse(fs.readFileSync(postsFilePath, 'utf-8')) : [];

        // 生成唯一 ID
        const postId = Date.now().toString();
        const newPost = { id: postId, title, markdown };
        existingData.push(newPost);

        // 写入 JSON 文件
        fs.writeFileSync(postsFilePath, JSON.stringify(existingData, null, 2));

        // 🔥 创建博客文件夹路径
        const postDir = path.join(blogDir, postId);
        if (!fs.existsSync(postDir)) {
            fs.mkdirSync(postDir, { recursive: true });
        }

        // 🔥 生成 `page.tsx` 文章模板
        const pageContent = `import React from 'react';
import MarkdownPost from '@/components/layout/MarkdownPost';

const Post = () => {
    return <MarkdownPost title={${JSON.stringify(title)}} content={${JSON.stringify(markdown)}} />;
};

export default Post;
`;

        // 将 `page.tsx` 写入 `blog/{id}/`
        fs.writeFileSync(path.join(postDir, 'page.tsx'), pageContent, 'utf-8');

        return NextResponse.json({ message: '文章保存成功', post: newPost }, { status: 201 });
    } catch (error) {
        console.error('服务器错误:', error);
        return NextResponse.json({ error: '服务器错误' }, { status: 500 });
    }
}

