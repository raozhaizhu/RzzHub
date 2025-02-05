// src/app/api/getposts/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// JSON 数据文件路径
const postsFilePath = path.join(process.cwd(), 'src/data/posts.json');

// ✅ 处理 GET 请求：获取所有文章
export async function GET() {
    try {
        const posts = fs.existsSync(postsFilePath) ? JSON.parse(fs.readFileSync(postsFilePath, 'utf-8')) : [];
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: '服务器错误' }, { status: 500 });
    }
}

