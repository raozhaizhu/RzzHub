import Image from 'next/image';
import Link from 'next/link';

interface Item {
    id: string;
    type: string;
    img: string;
    link: string;
    published_at?: string;
    title: string;
    description: string;
}

const Card = ({ item }: { item: Item }) => {
    return (
        <div className='relative'>
            <p
                className='absolute top-[0.5rem] left-[0.5rem] bg-[#7b8485] bg-opacity-70 
                text-white text-[0.75rem] p-[0.5rem]
                rounded-xl
            '
            >
                {item.type}
            </p>
            <Link href={item.link}>
                <Image
                    src={item.img}
                    alt='Picture'
                    width={480}
                    height={270}
                    className='w-full h-auto aspect-[16/9] object-cover rounded-lg mb-[0.5rem] cursor-pointer'
                />
            </Link>
            <p className='text-[rgba(0,0,0,0.5)] text-[0.85rem] mb-[0.5rem]'>
                {item.published_at
                    ? new Date(item.published_at).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                      })
                    : 'N/A'}
            </p>
            <h3 className='mb-[0.5rem]'>{item.title}</h3>
            <p className='text-[0.85rem] text-[rgba(0,0,0,0.75)] '>{item.description}</p>
        </div>
    );
};

const Section = ({ category, content, data }: { category: string; content: string; data: Item[] }) => {
    return (
        <section className='mb-[2rem]'>
            <h2 className='text-[2rem]'>{category}</h2>
            <p className='mb-[1rem]'>{content}</p>
            <div className='cards grid grid-cols-3 gap-[1rem]'>
                {data.slice(0, 6).map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Section;

