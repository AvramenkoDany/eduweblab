import { useTranslation } from 'react-i18next';

import './style.scss';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="container">
                <h1 className="main__title">{t('navMenu.logo')}</h1>
            </div>
        </header>
    );
};

export default Header;
