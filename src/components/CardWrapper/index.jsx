import PortfolioCard from './PortfolioCard';
import sortedCourses from '@/api/db/coursesCard';

import React from 'react';
import { useTranslation } from 'react-i18next';

const CardWrapper = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="card__list">
                {sortedCourses.map((card) => (
                    <PortfolioCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        subTitle={card.subTitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardWrapper;
