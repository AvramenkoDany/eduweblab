import { Footer, Navbar } from '@/shared/components';
import { Outlet } from 'react-router-dom';
import '@/styles/index.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/ThemeContext';

const Layout = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        console.error('ThemeContext is not provided');
        return null;
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <div className="layout">
            <Navbar setTheme={toggleTheme} theme={theme} />
            <main className={`Layout ${theme}-theme`}>
                <section className="Layout__section">
                    <Outlet />
                </section>
                <Footer theme={theme} />
            </main>
        </div>
    );
};

export default Layout;
