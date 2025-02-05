// @/components/layout/MarkdownLayout.tsx

import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

const MarkdownLayout = ({ markdown, setMarkdown }) => {
    return (
        <div className='markdown-container flex flex-col gap-[4rem]'>
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
            <MarkdownPreview markdown={markdown} />
        </div>
    );
};

export default MarkdownLayout;

