import React from 'react';
import '@/styles/index.scss';
import CardWrapper from '@/components/CardWrapper';
import { useTranslation } from 'react-i18next';

const CoursesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="courses-page">
            <h1 className="card__title">{t('navMenu.link2')}</h1>
            <CardWrapper />
        </div>
    );
};

export default CoursesPage;
