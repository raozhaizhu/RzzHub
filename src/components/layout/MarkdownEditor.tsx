import React from 'react';
import Image from 'next/image';

const MarkdownEditor = ({ markdown, setMarkdown }) => {
    return (
        <div className='bg-[#1f4037] bg-gradient-to-r from-[#1f4037] to-[#99f2c8] flex flex-col w-[60rem]'>
            <div className='px-[1rem] py-[0.5rem]'>
                <Image src='/favicon.png' alt='favicon' width={24} height={24} className='w-[1.5rem] h-[1.5rem]' />
            </div>

            <textarea
                className='editor px-[1rem] py-[0.5rem] bg-white h-[20rem] border border-gray-300 focus:outline-none '
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
        </div>
    );
};

export default MarkdownEditor;

