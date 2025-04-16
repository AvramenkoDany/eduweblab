import { Navbar } from '@/shared/components';
import { Outlet } from 'react-router-dom';
import '@/styles/index.scss';
import { useContext } from 'react';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className={'Layout'}>
                <section className="Layout__section">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Layout;
