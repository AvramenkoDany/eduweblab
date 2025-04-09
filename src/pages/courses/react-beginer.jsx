import React from 'react';
import { useTranslation } from 'react-i18next';
import reactModules from '@/api/courses/reactBeginerCourses/reactBeginerModule';

const ReactBeginnerPage = () => {
    const { t } = useTranslation();

    return (
        <div className="html container">
            <h1 className="html__title">{t('reactCourse.title')}</h1>
            <p className="html__description">{t('reactCourse.description')}</p>

            <div className="html__card-list">
                {reactModules.map((mod) => (
                    <div className="html__card" key={mod.id}>
                        <span className="html__card-number">
                            {' '}
                            {t('navMenu.lesson')} {mod.id}
                        </span>
                        <h3 className="html__card-title">{t(mod.titleKey)}</h3>
                        <p className="html__card-desc">
                            {t(mod.descriptionKey)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="html__cta">
                <button className="html__btn">
                    {t('buttons.startButton')}
                </button>
            </div>
        </div>
    );
};

export default ReactBeginnerPage;
