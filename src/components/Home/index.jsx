import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '@/styles/index.scss';

const HomePageContent = () => {
    const { t } = useTranslation();

    return (
        <section className="home__section">
            <div>
                <h1 className="home__title">{t('home.title')}</h1>
                <p className="home__description">{t('home.description')}</p>
                <Link to="/courses/math" className="home__button">
                    {t('buttons.startLearning')}
                </Link>
            </div>
        </section>
    );
};

export default HomePageContent;
