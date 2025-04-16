import React from 'react';
import { useTranslation } from 'react-i18next';
import { navPage } from '@/api/logic/navPage';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '@/styles/index.scss';

const Navbar = ({}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {}, [location.pathname]);

    const handleMenuClick = (el) => {
        navigate(el.route);
    };

    return (
        <aside className="navbar__nav">
            <div className="navbar__nav__links">
                <div className="navbar__nav__links-wrapper">
                    <NavLink to="/" className="navbar__nav__link">
                        {t('navMenu.logo')}
                    </NavLink>
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
            </div>
        </aside>
    );
};

export default Navbar;
