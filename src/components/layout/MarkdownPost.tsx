// src/app/components/MarkdownPost.tsx
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // ✅ 允许解析 HTML
import remarkGfm from 'remark-gfm'; // ✅ 支持 GitHub 风格的 Markdown 语法
import remarkBreaks from 'remark-breaks';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-light.css'; // 代码高亮主题
import './MarkdownPost.css';
import Container from '@/components/layout/Container';

interface MarkdownPostProps {
    title: string;
    content: string;
}

const MarkdownPost: React.FC<MarkdownPostProps> = ({ title, content }) => {
    return (
        <div>
            <div>
                <h1 className='text-[7rem] text-center'>{title}</h1>
            </div>
            <Container>
                <Markdown
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    className='preview'
                >
                    {content}
                </Markdown>
            </Container>
        </div>
    );
};

export default MarkdownPost;

