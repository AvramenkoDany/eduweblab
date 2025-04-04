import React from 'react';
import LanguageSwitcher from '@/shared/components/Navbar/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { navPage } from '@/api/logic/navPage';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '@/theme/ThemeToggle';
import '@/styles/index.scss';

const Navbar = ({ setTheme, theme }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        // Випадаюче меню закривається при зміні сторінки, якщо це необхідно
    }, [location.pathname]);

    const handleMenuClick = (el) => {
        navigate(el.route);
    };

    return (
        <aside className="navbar__nav">
            <div className="navbar__nav__links">
                <div className="navbar__nav__links-wrapper">
                    <p className="navbar__nav__link">{t('navMenu.logo')}</p>
                </div>

                {navPage.map((el, i) => (
                    <div key={el.id} className="navbar__nav__links-wrapper">
                        {el.children ? (
                            <>
                                <div
                                    className="navbar__nav__link"
                                    onClick={() => handleMenuClick(el)}
                                >
                                    {t(`navMenu.link${i + 1}`)}
                                </div>
                                <div className="dropdown-menu">
                                    {el.children.map((child) => (
                                        <NavLink
                                            key={child.id}
                                            to={child.route}
                                            className="navbar__nav__link dropdown-item"
                                        >
                                            {child.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <NavLink
                                to={el.route}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active_li navbar__nav__link'
                                        : 'navbar__nav__link'
                                }
                            >
                                {t(`navMenu.link${i + 1}`)}
                            </NavLink>
                        )}
                    </div>
                ))}

                <div className="navbar__nav__links-wrapper">
                    <LanguageSwitcher />
                </div>
                <div className="navbar__nav__links-wrapper">
                    <ThemeToggle setThemes={setTheme} theme={theme} />
                </div>
            </div>
        </aside>
    );
};

export default Navbar;
