import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="main__title">{t('navMenu.logo')}</h1>
            </div>
        </header>
    );
};

export default Header;
