import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/styles/index.scss';
import NewtonLaw from '@/components/phisicsCourse/NewtonLaw';
import HarmonicMotion from '@/components/phisicsCourse/HarmonicMotion';
import Kinematics from '@/components/phisicsCourse/Kinematics';
import ConservationLaws from '@/components/phisicsCourse/ConservationLaws';

const PhisicsPage = () => {
    const { t } = useTranslation();
    const [selectedLaw, setSelectedLaw] = useState('newton');

    const lawComponents = {
        newton: <NewtonLaw />,
        harmonic: <HarmonicMotion />,
        kinematics: <Kinematics />,
        conservation: <ConservationLaws />,
    };
    const lawNames = {
        newton: 'Закон Ньютона',
        harmonic: 'Гармонічні коливання',
        kinematics: 'Кінематика',
        conservation: 'Закони збереження',
    };

    return (
        <>
            <div className="html-page">
                <h1 className="html-page__title">{t('phisics.title')}</h1>
                <p className="html-page__description">
                    {t('phisics.description')}
                </p>
            </div>
            <div className="phisics-page__controls">
                <div className="phisics-page__radio-group">
                    {Object.keys(lawNames).map((lawKey) => (
                        <label key={lawKey} className="phisics-page__radio">
                            <input
                                type="radio"
                                name="physics-law"
                                value={lawKey}
                                checked={selectedLaw === lawKey}
                                onChange={(e) => setSelectedLaw(e.target.value)}
                                className="phisics-page__radio-input"
                            />
                            <span className="phisics-page__radio-button">
                                {lawNames[lawKey]}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="phisics-page__law-content">
                {lawComponents[selectedLaw]}
            </div>
        </>
    );
};

export default PhisicsPage;
