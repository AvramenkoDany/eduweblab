import React from 'react';
import { useTranslation } from 'react-i18next';
import htmlModules from '@/api/courses/htmlCourses/htmlModule';

const HtmlPage = () => {
    const { t } = useTranslation();

    return (
        <div className="html container">
            <h1 className="html__title">{t('htmlCourse.title')}</h1>
            <p className="html__description">{t('htmlCourse.description')}</p>

            <div className="html__card-list">
                {htmlModules.map((mod) => (
                    <div className="html__card" key={mod.id}>
                        <span className="html__card-number">
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

export default HtmlPage;
