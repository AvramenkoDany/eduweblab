import PortfolioCard from './PortfolioCard';
import sortedCourses from '@/api/db/coursesCard';

import { NavLink } from 'react-router-dom';

import React from 'react';
import { useTranslation } from 'react-i18next';

const CardWrapper = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="card__list">
                {sortedCourses.map((card) => (
                    <NavLink to={card.route} key={card.id} className="card">
                        <PortfolioCard
                            id={card.id}
                            title={card.title}
                            subTitle={card.subTitle}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default CardWrapper;
