'use client';

import { useEffect, useState } from 'react';
import MarkdownLayout from '@/components/layout/MarkdownLayout';
import { inter, libreBaskerville } from '@/components/ui/fonts';
import { Button } from '@/components/ui/button';
import './admin.css';
import markdownPlaceholder from '@/data/markdownPlaceholder.json';

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [title, setTitle] = useState('');
    const placeholder = markdownPlaceholder[0].Placeholder;
    const [markdown, setMarkdown] = useState(placeholder);

    useEffect(() => {
        const user = localStorage.getItem('admin');
        if (user === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        const username = prompt('请输入用户名');
        const password = prompt('请输入密码');
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('admin', 'true');
            setIsAuthenticated(true);
        } else {
            alert('用户名或密码错误');
        }
    };

    const logout = () => {
        localStorage.removeItem('admin');
        setIsAuthenticated(false);
    };

    const savePost = async () => {
        try {
            console.log('Sending request to save post...');
            const response = await fetch('/api/savepost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, markdown }),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                alert('Post saved successfully');
            } else {
                const errorText = await response.text();
                alert('Failed to save post: ' + errorText);
                console.error('Error response:', errorText);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            alert('Error occurred during the request');
        }
    };

    return (
        <div
            className={`${inter.className} bg-[#1f4037] bg-gradient-to-r from-[#99f2c8] to-[#1f4037] min-h-screen flex flex-col justify-center items-center gap-[1rem]`}
        >
            {isAuthenticated ? (
                <>
                    <h1 className={`${libreBaskerville.className} text-[3rem]`}>Markdown Editor Page</h1>
                    <div className='flex gap-[1rem]'>
                        <Button onClick={savePost}>Save Post</Button>
                        <Button onClick={logout}>Log Out</Button>
                    </div>

                    <input
                        type='text'
                        required
                        placeholder='Please enter the title of the article'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-[30rem] p-2 border border-white bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black rounded-md text-center 
                        text-[1.5rem]'
                    />
                    <MarkdownLayout markdown={markdown} setMarkdown={setMarkdown} />
                </>
            ) : (
                <>
                    <h1 className={`${libreBaskerville.className} text-[3rem]`}>Please log in</h1>
                    <Button onClick={login}>Admin log in</Button>
                </>
            )}
        </div>
    );
};

export default AdminPage;

