// src/components/layout/header.tsx
import { inter, libreBaskerville } from '@/components/ui/fonts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const MainInfo = () => {
    return (
        <div className='absolute z-10 bottom-0 left-[20%] transform -translate-y-1/2  mx-auto text-white'>
            <h1 className={`${libreBaskerville.className} w-[50%] text-[4rem]`}>
                RzzHub:
                <br /> Built for fun
            </h1>
            <p className={`${inter.className} w-[40rem] text-[1.2rem]`}>
                This is a personal website designed to showcase my blog, portfolio, and various small projects. It
                serves as a space where I share my thoughts on topics ranging from technology and life to personal
                insights.Hope you enjoy!
            </p>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-screen bg-[url('/chikorita-landscape-3.jpg')]">
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <div className='absolute z-10 top-[2rem] right-[20%] flex gap-4'>
                <Button className='cursor-pointer' variant='default' asChild>
                    <Link href='/admin'>Login</Link>
                </Button>
                <Button className='cursor-pointer' variant='default' asChild>
                    <Link href='/blog'>Blogs</Link>
                </Button>
            </div>

            <MainInfo />
        </section>
    );
};

export default Hero;

