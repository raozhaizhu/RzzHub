import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // ✅ 允许解析 HTML
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import Image from 'next/image';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-light.css'; // 代码高亮主题
import './MarkdownPost.css';

const MarkdownPreview = ({ markdown }) => {
    return (
        <div className='bg-[#1f4037] bg-gradient-to-r from-[#1f4037] to-[#99f2c8] flex flex-col w-[60rem]'>
            <div className='px-[1rem] py-[0.5rem]'>
                <Image src='/favicon.png' alt='favicon' width={24} height={24} className='w-[1.5rem] h-[1.5rem]' />
            </div>
            <div className='preview px-[1rem] py-[0.5rem]'>
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]} remarkPlugins={[remarkGfm, remarkBreaks]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownPreview;

