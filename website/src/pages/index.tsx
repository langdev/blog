import React from 'react';

interface PageProps {
    location: Location;
}
const Page: React.FC<PageProps> = () => {
    return <h1>Hello, LangDev!</h1>;
};
export default Page;
