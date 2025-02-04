type Props = {
    children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className='container mx-auto p-5 min-h-screen'>{children}</div>;
};

export default Container;

