// src/components/layout/header.tsx
import { inter, libreBaskerville } from '@/components/ui/fonts';

const MainInfo = () => {
    return (
        <div className='absolute bottom-0 left-[20%] transform -translate-y-1/2  mx-auto text-white'>
            <h1 className={`${libreBaskerville.className} w-[50%] text-[4rem]`}>
                RzzHub:
                <br /> Built for fun
            </h1>
            <p className={`${inter.className} w-[50%] text-[1.2rem]`}>
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
            <MainInfo />
        </section>
    );
};

export default Hero;

