import { useContext } from 'react';
import { ThemeContext } from '@/ThemeContext';
import { useTranslation } from 'react-i18next';

import './style.scss';

const SomePage = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const changeLanguage = (lng) => {
        if (i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="main__title">{t('name.name')}</h1>
                <ul className="header__list">
                    <li className="header__list-item text"></li>
                    <li className="header__list-item text">
                        <a>{t('page.info')}</a>
                        <a>sertification</a>
                    </li>
                    <ul className="header__lang">
                        {['en', 'ua', 'ru'].map((lng) => (
                            <li
                                key={lng}
                                className={`header__lang-item text ${
                                    i18n.language === lng ? 'active' : ''
                                }`}
                                role="button"
                                tabIndex="0"
                                onClick={() => changeLanguage(lng)}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && changeLanguage(lng)
                                }
                            >
                                {lng === 'en'
                                    ? 'English'
                                    : lng === 'ua'
                                      ? 'Українська'
                                      : 'Русский'}
                            </li>
                        ))}
                    </ul>
                    <ul className="switch__theme">
                        <li
                            className={`switch__theme__item text ${
                                theme === 'dark' ? 'active' : ''
                            }`}
                            onClick={() => theme !== 'dark' && toggleTheme()}
                        >
                            {t('buttons.dark')}
                        </li>
                        <li
                            className={`switch__theme__item text ${
                                theme === 'light' ? 'active' : ''
                            }`}
                            onClick={() => theme !== 'light' && toggleTheme()}
                        >
                            {t('buttons.light')}
                        </li>
                    </ul>
                </ul>
            </div>
        </header>
    );
};

export default SomePage;
