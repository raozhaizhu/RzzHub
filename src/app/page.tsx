import Container from '@/components/layout/Container';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import blogsData from '@/data/blogs.json'; // 导入 JSON 数据
import projectsData from '@/data/projects.json'; // 导入 JSON 数据

interface SectionData {
    category: string;
    content: string;
}

const sectionData: SectionData[] = [
    {
        category: 'Blogs',
        content:
            'Here, we share daily life, development thoughts, travel guides, literary reflections, and various inspirations.',
    },
    {
        category: 'Projects',
        content:
            'Here, we highlight the projects we are working on, focusing on innovative solutions and real-world impact.',
    },
];

export default function Home() {
    return (
        <main>
            <Hero />
            <Container>
                <Section category={sectionData[0].category} content={sectionData[0].content} data={blogsData} />
                <Section category={sectionData[1].category} content={sectionData[1].content} data={projectsData} />
            </Container>
        </main>
    );
}

