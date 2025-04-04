import Header from '@/shared/components/Header';
import { HomePageContent } from '@/components/index';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const HomePage = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    return (
        <>
            <Header />
            <HomePageContent />
        </>
    );
};
export default HomePage;
