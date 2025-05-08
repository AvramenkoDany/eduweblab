import React, { useState } from 'react';
import '@/styles/index.scss';

import MassConservation from '@/components/chemistryCourse/MassConservation';
import ConstantComposition from '@/components/chemistryCourse/ConstantComposition';
import MultipleProportions from '@/components/chemistryCourse/MultipleProportions';
import MolecularStructures from '@/components/chemistryCourse/MolecularStructures';
import EnergyLevels from '@/components/chemistryCourse/EnergyLevels';

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
                    Постійний склад
                </button>
                <button onClick={() => setSelectedLaw('proportions')}>
                    Кратні відношення
                </button>
                <button onClick={() => setSelectedLaw('molecules')}>
                    Молекули
                </button>
                <button onClick={() => setSelectedLaw('energy')}>
                    Енергетичні рівні
                </button>
            </div>
            {renderLawComponent()}
        </div>
    );
};

export default ChemistryPage;
