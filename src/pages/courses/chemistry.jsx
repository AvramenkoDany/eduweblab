import React, { useState } from 'react';
import '@/styles/index.scss';

import MassConservation from '@/components/chemistryCourse/MassConservation';
import ConstantComposition from '@/components/chemistryCourse/ConstantComposition';
import MultipleProportions from '@/components/chemistryCourse/MultipleProportions';
import MolecularStructures from '@/components/chemistryCourse/MolecularStructures';
import EnergyLevels from '@/components/chemistryCourse/EnergyLevels';
import Hess from '@/components/chemistryCourse/hess';

const ChemistryPage = () => {
    const [selectedLaw, setSelectedLaw] = useState('mass');

    const renderLawComponent = () => {
        switch (selectedLaw) {
            case 'mass':
                return <MassConservation />;
            case 'composition':
                return <ConstantComposition />;
            case 'proportions':
                return <MultipleProportions />;
            case 'molecules':
                return <MolecularStructures />;
            case 'energy':
                return <EnergyLevels />;
            case 'hess':
                return <Hess />;
            default:
                return null;
        }
    };

    return (
        <div className="chemistry-page">
            <h1 className="chemistry-page__title">Хімічні Закони</h1>
            <div className="chemistry-page__switcher">
                <button onClick={() => setSelectedLaw('mass')}>
                    Збереження маси
                </button>
                <button onClick={() => setSelectedLaw('composition')}>
                    Закон Авогадро
                </button>
                <button onClick={() => setSelectedLaw('proportions')}>
                    Закон діючих мас
                </button>
                <button onClick={() => setSelectedLaw('molecules')}>
                    Закон Фарадея (перший)
                </button>
                <button onClick={() => setSelectedLaw('energy')}>
                    Закон Дюлонга-Пті
                </button>
                <button onClick={() => setSelectedLaw('hess')}>
                    Закон Гесса
                </button>
            </div>
            {renderLawComponent()}
        </div>
    );
};

export default ChemistryPage;
